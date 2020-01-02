import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class MetaserviceService {
  constructor(private titleService: Title, private meta: Meta) {}

  updateMetaInfo(description?: any, title?: any, image?: any, url?: any) {
    this.meta.addTags(
      [
        { name: "description", content: description },
        { property: "og:title", content: "UA" + "|" + title },
        { property: "og:description", content: description },
        {
          property: "og:image",
          content: "https://www.utility-aid.co.uk/" + image
        },
        { property: "og:url", content: "https://www.utility-aid.co.uk/" + url },
        { property: "og:type", content: "website" },
        { property: "twitter:description", content: description },
        {
          property: "twitter:image",
          content: "https://www.utility-aid.co.uk/" + image
        },
        { name: "twitter:card", content: "summary" },
        {
          name: "keywords",
          content:
            "Utility, Aid Utility, service, utility, consultancy, energy, not for profit, saving, charities, charity"
        }
      ],
      true
    );
  }

  updateTitle(title?: string, description?: string) {
    this.titleService.setTitle("UA" + " | " + description);
  }
}
