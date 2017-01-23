import { Component } from '@angular/core';

@Component({
    selector: 'success',
    template: `<html>
        <style>#half-page{
          margin: 0px;
          background: lightblue;
          height: 50%;
          padding-top: 25px;
        }
        
       </style>
        
        <div id="half-page" >
          <section class="text-center">
              <h1>Login Success</h1>
          </section>
        </div></html>
    `
})
export class SuccessComponent  {


}
