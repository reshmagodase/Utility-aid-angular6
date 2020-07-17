import { Directive, ComponentFactory, ComponentRef, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SmallLoaderComponent } from './small-loader/small-loader.component';


@Directive({
  selector: '[apploading]'
})
export class LoaderDirective {

  loadingFactory: ComponentFactory<SmallLoaderComponent>;
  loadingComponent: ComponentRef<SmallLoaderComponent>;

  @Input()
  set apploading(loading: boolean) {

    this.vcRef.clear();
    if (loading) {
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
    }
    else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(SmallLoaderComponent);
  }
}
