import {  ToolbarOrientation, ToolbarUsage, UiItemsProvider, CommonToolbarItem, StageUsage, ToolbarItemUtilities } from "@itwin/appui-react";
import { Visualization } from "../Visualization";
import { IModelApp } from "@itwin/core-frontend/lib/cjs/IModelApp";

export class SmartDeviceUIItemsProvider implements UiItemsProvider {
   public readonly id =  "SmartDeviceUIProvider";
   private _toggleWalls: boolean = false;

   public provideToolbarButtonItems(stageId: string, stageUsage: string, toolbarUsage: ToolbarUsage, toolbarOrientation: ToolbarOrientation) : CommonToolbarItem[] {
      const toolbarButtonItems: CommonToolbarItem[] =[];

      if(stageUsage === StageUsage.General && toolbarUsage === ToolbarUsage.ContentManipulation && toolbarOrientation === ToolbarOrientation.Vertical){
         const toggleWallsButton = ToolbarItemUtilities.createActionItem(
            "ToggleWalls",
            1000,
            "icon-element",
            "toggle Walls Tool",
            () => {
               Visualization.hideHouseExterior(IModelApp.viewManager.selectedView!, this._toggleWalls)
            }
         );
         toolbarButtonItems.push(toggleWallsButton);  
      }

 return toolbarButtonItems;
}

}