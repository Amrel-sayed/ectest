/*!
 * Copyright (c) Metaways Infosystems GmbH, 2014
 * LGPLv3, http://opensource.org/licenses/LGPL-3.0
 */


Ext.ns('MShop.panel.locale');

/**
 * Nest all locale related panels in the locale tab
 * 
 * @class MShop.panel.locale.TabUi
 * @extends Ext.Panel
 */
MShop.panel.locale.TabUi = Ext.extend(Ext.Panel, {

    maximized : true,
    layout : 'fit',
    modal : true,

    initComponent : function() {

        this.title = MShop.I18n.dt('admin', 'Locale');

        this.items = [{
            xtype : 'tabpanel',
            activeTab : 0,
            border : false,
            itemId : 'MShop.panel.locale.tabui',
            plugins : ['ux.itemregistry']
        }];

        MShop.panel.locale.TabUi.superclass.initComponent.call(this);
    }
});

Ext.reg('MShop.panel.locale.tabui', MShop.panel.locale.TabUi);

Ext.ux.ItemRegistry.registerItem('MShop.MainTabPanel', 'MShop.panel.locale.tabui', MShop.panel.locale.TabUi, 80);
