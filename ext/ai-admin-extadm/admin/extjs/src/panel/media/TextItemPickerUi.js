/*!
 * Copyright (c) Metaways Infosystems GmbH, 2011
 * LGPLv3, http://opensource.org/licenses/LGPL-3.0
 */


Ext.ns('MShop.panel.media');

// hook text picker into the media ItemUi
Ext.ux.ItemRegistry.registerItem('MShop.panel.media.ItemUi', 'MShop.panel.media.TextItemPickerUi', {
    xtype : 'MShop.panel.text.itempickerui',
    itemConfig : {
        recordName : 'Media_Lists',
        idProperty : 'media.lists.id',
        siteidProperty : 'media.lists.siteid',
        listDomain : 'media',
        listNamePrefix : 'media.lists.',
        listTypeIdProperty : 'media.lists.type.id',
        listTypeLabelProperty : 'media.lists.type.label',
        listTypeControllerName : 'Media_Lists_Type',
        listTypeCondition : {
            '&&' : [{
                '==' : {
                    'media.lists.type.domain' : 'text'
                }
            }]
        },
        listTypeKey : 'media/lists/type/text'
    },
    listConfig : {
        domain : 'media',
        prefix : 'text.'
    }
}, 10);
