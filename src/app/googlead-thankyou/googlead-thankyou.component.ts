import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-googlead-thankyou',
  templateUrl: './googlead-thankyou.component.html',
  styleUrls: ['./googlead-thankyou.component.css']
})
export class GoogleadThankyouComponent implements OnInit {

  constructor(private meta: MetaserviceService, private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );
    this.meta.updateTitle("", "Thank You");

    let script = this._renderer2.createElement('script');
    script.type = `application/javascript`;
    script.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      gtag('event', 'conversion', {'send_to': 'AW-644839341/LooQCKqbus4BEK3vvbMC'});
        gtag('config', 'AW-644839341');
        `;

    this._renderer2.appendChild(this._document.body, script);

    let script1 = this._renderer2.createElement('script');
    script.type = `application/javascript`;
    script.text = `
        fbq('track', 'Lead');
        `;

    this._renderer2.appendChild(this._document.body, script1);

    let script2 = this._renderer2.createElement('script');
    script.type = `application/javascript`;
    script.text = `
        !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '193968051892480');
  fbq('track', 'Lead');
  fbq('track', 'PageView');
        `;

    this._renderer2.appendChild(this._document.body, script2);

    let script3 = this._renderer2.createElement('script');
    script.type = `application/javascript`;
    script.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('event', 'conversion', {'send_to': 'AW-644839341/LooQCKqbus4BEK3vvbMC'});
    gtag('config', 'AW-644839341');
        `;

    this._renderer2.appendChild(this._document.body, script3);

    let script4 = this._renderer2.createElement('script');
    script.type = `application/javascript`;
    script.text = `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-164807903-1');
        `;

    this._renderer2.appendChild(this._document.body, script4);
  }

  ngAfterContentInit() {

  }

}
