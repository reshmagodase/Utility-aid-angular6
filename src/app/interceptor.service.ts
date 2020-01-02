import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError, timer } from "rxjs";
import { map, catchError, delay, retryWhen } from "rxjs/operators";
import { mergeMap, finalize } from "rxjs/operators";
import { Router } from "@angular/router";

import { LoaderService } from "./loader.service";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(
    private router: Router,

    private Loaderservice: LoaderService
  ) {}

  retryObj: any;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    setTimeout(() => {
      this.Loaderservice.isLoading.next(true);
    });

    return next.handle(request).pipe(
      delay(0),
      retryWhen(genericRetryStrategy(this.retryObj)),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.Loaderservice.isLoading.next(false);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.Loaderservice.isLoading.next(false);
        return throwError(error);
      })
    );
  }
}

// if internet connection is not avilable at the moment try for six times
export const genericRetryStrategy = ({
  maxRetryAttempts = 0,
  scalingDuration = 0,
  excludedStatusCodes = []
}: {
  maxRetryAttempts?: number;
  scalingDuration?: number;
  excludedStatusCodes?: number[];
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error);
      }
      return timer(retryAttempt * scalingDuration);
    }),
    finalize(() => {})
  );
};
