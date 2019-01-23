import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
    providedIn: 'root'
})
export class KawaAdapterService {
    static initModal(elementId: string) {
        // @ts-ignore
        const theTarget = elementId.attr('href');
        // @ts-ignore
        $(theTarget).dialog({
            minHeight: 350,
            minWidth: 470,
            close() {
                // @ts-ignore
                elementId.focus();
                // @ts-ignore
                $(this).dialog('widget').remove();
            },
            autoOpen: false,
            describedBy: 'dialogDescription',
            modal: true
        });
    }

    static initHamburgerMenu() {
        console.log('initialising hamburger menu...');
        $('#hamburgerMenuIcon span').on('click touch', function() {
            $('#hamburgerMenu').show();
        });

        $(document).on('click touch', function(event) {
            if (
                !$(event.target)
                    .parents()
                    .addBack()
                    .is('#hamburgerMenuIcon')
            ) {
                $('#hamburgerMenu').hide();
            }
        });

        $('#hamburgerMenu').on('click touch', function(event) {
            event.stopPropagation();
        });
    }

    static initSplitPanel() {
        console.log('initialising splitPanel...');

        // @ts-ignore
        $('.panel-left').resizable({
            handleSelector: '.splitter',
            resizeHeight: false
        });
        // @ts-ignore
        $('.panel-top').resizable({
            handleSelector: '.splitter-horizontal',
            resizeWidth: false
        });
    }

    static initKTabs() {
        console.log('initialising kTabs...');

        // @ts-ignore
        if (jQuery.fn.kTabs) {
            // @ts-ignore
            jQuery('.k-tabbed-data').kTabs();
        } else {
            console.error('unable to initiate kTabs...');
        }
    }

    static initDataTable(tableId: string): any {
        // workaround over dataTable initialisation
        return new Promise(function(resolve, reject) {
            window.setTimeout(function() {
                const dt = $('#' + tableId).DataTable({
                    // @ts-ignore
                    select: true,
                    sPaginationType: 'full_numbers',
                    destroy: true,
                    oLanguage: {
                        sSearch: 'You Search :',
                        oPaginate: {
                            sFirst: '1st',
                            sPrevious: 'Prev'
                        }
                    }
                });

                resolve(dt);
            }, 200);
        });
    }

    static destroyDataTable(tableId: string): any {
        const targetTable = $('#' + tableId);

        if (targetTable && targetTable !== undefined) {
            // targetTable.DataTable().clear();
            targetTable.DataTable().destroy();
        }
    }

    constructor() {}
}
