import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectoshome',
  templateUrl: './proyectoshome.component.html',
  styleUrls: ['./proyectoshome.component.css']
})
export class ProyectoshomeComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor() { 
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      this.loadScript2();
      resolve(true);
  });
  }

  ngOnInit() {
  }
 
  public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["../assets/js/swiper.min.js"];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}

public loadScript2() {        
  var isFound = false;
  var scripts = document.getElementsByTagName("script")
  for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
          isFound = true;
      }
  }

  if (!isFound) {
      var dynamicScripts = ["../assets/js/swiperstart.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
          let node = document.createElement('script');
          node.src = dynamicScripts [i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
      }

  }
}
}
