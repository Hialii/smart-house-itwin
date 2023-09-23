import { QueryRowFormat } from "@itwin/core-common";
import { IModelConnection, ScreenViewport } from "@itwin/core-frontend";

export class Visualization {

  public static hideHouseExterior = async (vp: ScreenViewport, toggle?: boolean) => {

    const categoryIds = await Visualization.getCategoryIds(vp.iModel);

    if(toggle) {
      vp.changeCategoryDisplay(categoryIds, toggle);
    } else {
      vp.changeCategoryDisplay(categoryIds, false);
    }
  }

  private static getCategoryIds = async (iModel: IModelConnection) => {

    const categoriesToHide = [
      "'Dry Wall 2nd'",
      "'Dry Wall 1st'",
      "'WINDOWS 1ST'",
      "'WINDOWS 2ND'",
      "'Ceiling 1st'",
      "'Ceiling 2nd'",
      "'Callouts'",
      "'light fixture'",
    ]

    const query = `SELECT ECInstanceId FROM Bis.Category
        WHERE CodeValue IN (${categoriesToHide.toString()})`;

    const result = iModel.query(query, undefined, { rowFormat: QueryRowFormat.UseJsPropertyNames });
    const categoryIds = [];

    for await (const row of result) {
      categoryIds.push(row.id);
    }

    return categoryIds;
  }
}