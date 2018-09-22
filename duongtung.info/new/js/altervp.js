document.addEventListener("DOMContentLoaded", function() {
    // Check if settings are set
    if (typeof AlterVP !== 'undefined') {

        // Change the Title
        if (typeof AlterVP.title !== 'undefined') {
            document.title = AlterVP.title;
        }

        // Force Protocol
        if (typeof AlterVP.ssl !== 'undefined') {
            if (AlterVP.ssl === 1) {
                if (location.protocol != 'https:') {
                    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
                }
            }
        }

        // Change the Logo
        if (typeof AlterVP.logo !== 'undefined') {
            document.getElementById('imgLogo').src = AlterVP.logo;
        }

        // Change the Theme (Kudos to VPThemes for the Themes and CDN)
        if (typeof AlterVP.theme !== 'undefined') {
            //:: Style
            let styles = document.createElement('link');
            styles.setAttribute('rel', 'stylesheet');
            styles.type = 'text/css';
            styles.href = '//cdn.vpthemes.win/' + AlterVP.theme + '/styles.css';
            document.head.appendChild(styles);

            //:: Icon Spritemap
            let icons = document.createElement('link');
            icons.setAttribute('rel', 'stylesheet');
            icons.type = 'text/css';
            icons.href = '//cdn.vpthemes.win/' + AlterVP.theme + '/icon_spritemap.css';
            document.head.appendChild(icons);
        }

        // Add Credits
        if (typeof AlterVP.credits !== 'undefined') {
            var _0x2e9c = ['<a\x20href=\x22https://github.com/xpde/AlterVP\x22><img\x20id=\x22imgPoweredByCpanel\x22\x20src=\x22https://image.prntscr.com/image/ZEB-KIyTSKiOwa-12vOyTg.png\x22\x20alt=\x22AlterVP\x22\x20style=\x22display:inline-block;\x20z-index:2147483647;\x20visibility:visible;\x22></a>', '<img\x20id=\x22imgPoweredByCpanel\x22\x20src=\x22/panel/pl-res/powered_by_cpanel.png\x22\x20alt=\x22cPanel,\x20Inc.\x22\x20style=\x22display:inline-block;\x20z-index:2147483647;\x20visibility:visible;\x22>', '<img\x20id=\x22imgPoweredByCpanel\x22\x20src=\x22', 'credits', 'logo', '\x22\x20alt=\x22', 'desc', 'innerHTML', '\x20-\x20Partial\x20Rights\x20Reservered', 'getElementById', 'lnkPoweredByCpanel', 'txtCpanelVersion'];
            (function(_0xdff4f0, _0x35ec48) {
                var _0x5ed72f = function(_0x192a18) {
                    while (--_0x192a18) {
                        _0xdff4f0['push'](_0xdff4f0['shift']());
                    }
                };
                _0x5ed72f(++_0x35ec48);
            }(_0x2e9c, 0x75));
            var _0x5cbd = function(_0x2699a9, _0x501e82) {
                _0x2699a9 = _0x2699a9 - 0x0;
                var _0x5b6c40 = _0x2e9c[_0x2699a9];
                return _0x5b6c40;
            };
            let lnk = document[_0x5cbd('0x0')](_0x5cbd('0x1'));
            let txt = document[_0x5cbd('0x0')](_0x5cbd('0x2'));
            let ab = _0x5cbd('0x3');
            let def = _0x5cbd('0x4');
            let cust = _0x5cbd('0x5') + AlterVP[_0x5cbd('0x6')][_0x5cbd('0x7')] + _0x5cbd('0x8') + AlterVP[_0x5cbd('0x6')][_0x5cbd('0x9')] + '\x22\x20style=\x22display:inline-block;\x20z-index:2147483647;\x20visibility:visible;\x22>';
            lnk[_0x5cbd('0xa')] = def + '\x20' + ab + '\x20' + cust;
            txt[_0x5cbd('0xa')] = '©\x20' + AlterVP[_0x5cbd('0x6')][_0x5cbd('0x9')] + _0x5cbd('0xb');
        }
    } else {
        console.log('AlterVP has been started, but no settings have been made');
    }
});
