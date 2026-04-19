const formatter = {
    fonts: {
        normal: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
        sans: "\"\\ !#$%&'()*+,-./𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫:;<=>?@𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹[]^_`𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓{|}~",
        sansBold: "\"\\ !#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~",
        sansItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪|~",
        monospace: "\"\\ !#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝖾𝖿𝗀𝗁𝗂|~",
        // ... (sisanya tetap sama untuk data mapping font agar fungsional)
        serifBold: "\"\\ !#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝗫𝐘𝐙[]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢|~",
        doubleStruck: "\"\\ !#$%&'()*+,-./𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡:;<=>?@𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ[]^_`𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚|~",
        fraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ[]^_`𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦|~",
        script: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵[]^_`𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾|~",
        circled: "\"⦸ !#$%&'()⊛⊕,⊖⨀⊘⓪①②③④⑤⑥⑦⑧⑨:;⧀⊜⧁?@ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ[]^_`ⓐⓑⓒⓓⓔ|~",
        squaredNegative: "\"⧅ !#$%&'()⧆⊞,⊟⊡⧄0123456789:;<=>?@🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉[]^_`|~",
        smallCaps: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩꞯʀꜱᴛᴜᴠ|~",
        inverted: "„\\ ¡#$%⅋,)(*+‘-˙/0ƖՇƐᔭϛ9𝘓86:;<=>¿@∀ꓭↃꓷƎℲ⅁HIſꓘ⅂WNOԀῸꓤS⊥∩ꓥMX⅄Z][^‾`ɐqɔpǝɟƃɥı|~",
        mirrored: "\"/ !#$%&')(*+,-.\\0߁ςƐ߂टabdↄbɘʇϱʜiįʞlmᴎoqpᴙꙅɈυvwxγz}|{~"
    },

    init: function() {
        const textarea = document.getElementById("main-editor");
        this.cm = CodeMirror.fromTextArea(textarea, {
            lineWrapping: true,
            theme: "default"
        });
        this.allChars = new Set(Object.values(this.fonts).join(""));
        this.bindEvents();
    },

    bindEvents: function() {
        document.querySelectorAll(".font-btn, .clear-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const fontClass = btn.classList[0] === 'font-btn' ? btn.classList[0] : '';
                // Trick to get the specific font name from class list if any
                const specificFont = Array.from(btn.classList).find(c => this.fonts[c]);
                this.formatSelections(specificFont || "", { ...btn.dataset });
            });
        });
    },

    formatText: function(text, font, options) {
        if (this.fonts[font] && text.split('').every(c => new Set(this.fonts[font]).has(c))) font = "normal";
        
        let chars = Array.from(text);
        if (this.fonts[font]) {
            const target = Array.from(this.fonts[font]);
            const sources = Object.values(this.fonts);
            chars = chars.map(c => {
                let idx = -1;
                sources.some(list => {
                    idx = Array.from(list).indexOf(c);
                    return idx > -1;
                });
                return idx > -1 ? target[idx] : c;
            });
        }

        if (options.append) chars = chars.map(c => c + options.append);
        if (options.clear) chars = chars.map(c => c.replace(/\u035f|\u0333|\u0335|\u0336/gu, ""));
        
        return chars.join("");
    },

    formatSelections: function(font, options) {
        const selections = this.cm.getSelections();
        const replaced = selections.map(s => this.formatText(s, font, options));
        this.cm.replaceSelections(replaced, "around");
    },

    copy: function(btn) {
        const text = this.cm.getValue();
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.innerText;
            btn.innerText = "COPIED!";
            btn.style.background = "#00ff00";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
            }, 2000);
        });
    },

    clearAll: function() {
        if(confirm("Hapus semua teks?")) {
            this.cm.setValue("");
        }
    }
};

window.onload = () => formatter.init();
