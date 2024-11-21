sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("progress_pad.controller.View1", {
        onInit: function () {
            var oData = {
                Items: [
                    { Category: "Success", Percentage: 50.00 },
                    { Category: "Rejection", Percentage: 50.00 }
                ]

            };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "IceCreamModel");
        }
    });
});
