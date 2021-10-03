import { Body } from "./Body";
import { GridImages } from "./GridImages";
import { Preend } from "./Preend";


export  function RenderPages(){
  return(
    <div>
    <Body/>
    <GridImages/>
    <Preend/>
    </div>
  );
}