/*   Call Function JS - created by GAR/ XER  */
console.log('callFunctions loaded...');
(function ($) {
    'use strict';

    $(document).ready(function () {

        if (jQuery.fn.kTabs) {
            jQuery('.k-tabbed-data').kTabs();
        }

        if ($.fn.flexNav) {
            $('.k-navbar').flexNav();
        }

        if ($.fn.collapsiblePanel) {
            $('.k-panel').collapsiblePanel();
        }


        if ($.fn.dataTable) {
            $('table.k-data-table').dataTable({
                'sPaginationType': 'full_numbers',
                'oLanguage': {
                    'sSearch': 'You Search :',
                    'oPaginate': {
                        'sFirst': '1st',
                        'sPrevious': 'Prev'
                    }
                }
            });
        }


    });
})(jQuery);

