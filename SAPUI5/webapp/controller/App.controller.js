//eslint-disable next-line no-undef
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "gsusinvoices/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel } ResourceModel
     */
    function (Controller, MessageToast, Models,ResourceModel) {
        "use strict";
        return Controller.extend("gsusinvoices.SAPUI5.controller.App", {
            
            onInit: function(){
      /*          const newLocal = Models.createRecipient();
                // Set data model json on the view
                this.getView().setModel(newLocal);
                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName : "gsusinvoices.SAPUI5.i18n.i18n" })
                this.getView().setModel(i18nModel,"i18n")
     */           
            },

            onShowHello: function() {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle(); // contenido Hello sin {}
                // read value in Real time of button
                var sRecipient = this.getView().getModel().getProperty("/recipient/name"); // contenido de {}
                // set into instance
                var sMsg = oBundle.getText("HelloMsg",[sRecipient ]);
                MessageToast.show(sMsg);
            }
        })
    });