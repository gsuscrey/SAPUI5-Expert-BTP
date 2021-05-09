sap.ui.define([
    "sap/ui/core/UIComponent",
    "gsusinvoices/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
], 

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel } ResourceModel
     */

function(UIComponent,Models,ResourceModel) {
    return UIComponent.extend("gsusinvoices.SAPUI5.Component",
    {
        metadata:{ 
            manifest: "json"
            // "rootView": "gsusinvoices.SAPUI5.view.App",
            // "type": "XML",
            // "async": true,
            // "id": "app"
        },


        init: function() {
           //Call the init function of the parent (this instance)
           UIComponent.prototype.init.apply(this, arguments);
           // TENEMOS INSTANCIADA TODAS LAS VISTAS. no hace falta el getView()
           //set data model on the view
                const newLocal = Models.createRecipient();
                // Set data model json on the view 
                this.setModel(newLocal);
                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName : "gsusinvoices.SAPUI5.i18n.i18n" })
                this.setModel(i18nModel,"i18n")

        }

    });
    
});