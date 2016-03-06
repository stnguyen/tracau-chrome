// Set up context menu tree at install time.

// copied from http://tracau.vn/scripts/controllers/1e3eaac2.main.min.js
function binarySearch(wordsearch, arr) {
    var arrLength = arr.length;
    var getElementPosition = findElement();
    return getElementPosition;

    function findElement() {
        var high = arr.length - 1;
        var low = 0;
        while (low <= high) {
            var mid = parseInt((low + high) / 2);
            var element = arr[mid];
            if (element > wordsearch) high = mid - 1;
            else if (element < wordsearch) low = mid + 1;
            else return mid
        }
        return -1
    }
};

// copied from http://tracau.vn/scripts/controllers/1e3eaac2.main.min.js
function detectLanguage(term) {
    var asciiOnlyPattern = new RegExp("^[\x20-\x7f]*$");
    if (!asciiOnlyPattern.test(term)) {
        return 'vi';
    } else {
        var arrSplitWords = term.split(" ");
        var limitSearch = 3;
        var wCount = -1;
        var singleWords = ["ac", "ach", "ai", "am", "an", "ang", "anh", "ao", "ap", "at", "au", "ay", "ba", "bac", "bach", "bai", "bam", "ban", "bang", "banh", "bao", "bap", "bat", "bau", "bay", "be", "ben", "benh", "beo", "bep", "bet", "beu", "bi", "bia", "bich", "biem", "bien", "bieng", "biet", "bieu", "bim", "bin", "binh", "bip", "bit", "biu", "bo", "boc", "boi", "bom", "bon", "bong", "bop", "bot", "bu", "bua", "buat", "buc", "bui", "bun", "bung", "buoc", "buoi", "buom", "buon", "buong", "buot", "buou", "bup", "but", "buu", "ca", "cac", "cach", "cai", "cam", "can", "cang", "canh", "cao", "cap", "cat", "cau", "cay", "cha", "chac", "chai", "cham", "chan", "chang", "chanh", "chao", "chap", "chat", "chau", "chay", "che", "chech", "chem", "chen", "chenh", "cheo", "chep", "chet", "chi", "chia", "chich", "chiec", "chiem", "chien", "chieng", "chiet", "chieu", "chim", "chin", "chinh", "chit", "chiu", "cho", "choa", "choai", "choang", "choc", "choi", "chom", "chon", "chong", "chop", "chot", "chu", "chua", "chuan", "chuc", "chuenh", "chui", "chum", "chun", "chung", "chuoc", "chuoi", "chuon", "chuong", "chuot", "chup", "chut", "chuyen", "co", "coc", "coi", "com", "con", "cong", "cop", "cot", "cu", "cua", "cuc", "cui", "cum", "cun", "cung", "cuoc", "cuoi", "cuom", "cuon", "cuong", "cuop", "cup", "cut", "cuu", "da", "dac", "dai", "dam", "dan", "dang", "danh", "dao", "dap", "dat", "dau", "day", "de", "dem", "den", "denh", "deo", "dep", "det", "deu", "di", "dia", "dich", "diec", "diem", "dien", "dieng", "diep", "diet", "dieu", "dinh", "diu", "do", "doa", "doai", "doan", "doanh", "doat", "doc", "doi", "dom", "don", "dong", "dop", "dot", "du", "dua", "duc", "duenh", "dui", "dum", "dun", "dung", "duoc", "duoi", "duom", "duong", "dut", "duy", "duyen", "duyet", "ec", "ech", "em", "eng", "enh", "eo", "ep", "ga", "gac", "gach", "gai", "gam", "gan", "gang", "ganh", "gao", "gap", "gat", "gau", "gay", "ghe", "ghen", "ghenh", "gheo", "ghep", "ghet", "ghi", "ghien", "ghim", "gho", "gi", "gia", "giac", "giai", "giam", "gian", "giang", "gianh", "giao", "giap", "giat", "giau", "giay", "gie", "giem", "gieng", "gieo", "giep", "giet", "gieu", "gin", "gio", "gioi", "gion", "giong", "giot", "giu", "giua", "giuc", "giui", "giun", "giuong", "giup", "giut", "go", "goa", "goc", "goi", "gom", "gon", "gong", "gop", "got", "gra", "gu", "guc", "gui", "guoc", "guom", "guong", "ha", "hac", "hach", "hai", "ham", "han", "hang", "hanh", "hao", "hap", "hat", "hau", "hay", "he", "hec", "hech", "hem", "hen", "henh", "heo", "hep", "het", "hi", "hiem", "hien", "hiep", "hieu", "him", "hinh", "hip", "hit", "hiu", "ho", "hoa", "hoac", "hoach", "hoai", "hoam", "hoan", "hoang", "hoanh", "hoat", "hoc", "hoe", "hoen", "hoi", "hom", "hon", "hong", "hop", "hot", "hu", "hua", "huan", "huc", "hue", "huech", "huenh", "hui", "hum", "hun", "hung", "huo", "huong", "huou", "hup", "hut", "huu", "huy", "huych", "huyen", "huyet", "huynh", "huyt", "hy", "ia", "ich", "im", "in", "inh", "it", "iu", "ka", "ke", "kech", "kem", "ken", "keng", "kenh", "keo", "kep", "ket", "keu", "kha", "khac", "khach", "khai", "kham", "khan", "khang", "khanh", "khao", "khap", "khat", "khau", "khay", "khe", "khen", "khenh", "kheo", "khep", "khet", "kheu", "khi", "khia", "khich", "khiem", "khien", "khieng", "khiep", "khieu", "khin", "khinh", "khit", "kho", "khoa", "khoac", "khoai", "khoam", "khoan", "khoang", "khoanh", "khoat", "khoc", "khoe", "khoen", "khoeo", "khoi", "khom", "khon", "khong", "khop", "khu", "khua", "khuan", "khuat", "khuay", "khuc", "khue", "khuech", "khueu", "khum", "khung", "khuo", "khuoc", "khuon", "khuong", "khut", "khuu", "khuy", "khuya", "khuyen", "khuyet", "khuynh", "khuyu", "ki", "kia", "kich", "kiem", "kien", "kieng", "kiep", "kiet", "kieu", "kim", "kin", "kinh", "kip", "kiu", "kon", "ky", "la", "lac", "lach", "lai", "lam", "lan", "lang", "lanh", "lao", "lap", "lat", "lau", "lay", "le", "lech", "lem", "len", "leng", "lenh", "leo", "lep", "let", "leu", "li", "lia", "lich", "liec", "liem", "lien", "lieng", "liep", "liet", "lieu", "lim", "linh", "lit", "liu", "lo", "loa", "loac", "loai", "loan", "loang", "loanh", "loat", "loay", "loc", "loe", "loet", "loi", "lom", "lon", "long", "lop", "lot", "lu", "lua", "luan", "luat", "luc", "lui", "lum", "lun", "lung", "luoc", "luoi", "luom", "luon", "luong", "luot", "lup", "lut", "luu", "luy", "luyen", "luynh", "ly", "ma", "mac", "mach", "mai", "mam", "man", "mang", "manh", "mao", "map", "mat", "mau", "may", "me", "mec", "mech", "mem", "men", "menh", "meo", "met", "meu", "mi", "mia", "mien", "mieng", "miet", "mieu", "mim", "min", "minh", "mit", "mo", "moc", "moi", "mom", "mon", "mong", "mop", "mot", "mu", "mua", "muc", "mui", "mum", "mun", "mung", "muoi", "muon", "muong", "muop", "muot", "mup", "mut", "muu", "my", "na", "nac", "nai", "nam", "nan", "nang", "nanh", "nao", "nap", "nat", "nau", "nay", "ne", "nem", "nen", "neo", "nep", "net", "neu", "nga", "ngac", "ngach", "ngai", "ngam", "ngan", "ngang", "nganh", "ngao", "ngap", "ngat", "ngau", "ngay", "nghe", "nghech", "nghen", "nghenh", "ngheo", "nghet", "ngheu", "nghi", "nghia", "nghich", "nghiem", "nghien", "nghieng", "nghiep", "nghiet", "nghieu", "nghin", "nghinh", "ngo", "ngoa", "ngoac", "ngoach", "ngoai", "ngoan", "ngoanh", "ngoao", "ngoat", "ngoay", "ngoc", "ngoe", "ngoem", "ngoen", "ngoeo", "ngoi", "ngom", "ngon", "ngong", "ngot", "ngu", "ngua", "nguay", "nguc", "nguech", "ngui", "ngun", "ngung", "nguoc", "nguoi", "nguon", "nguong", "ngup", "ngut", "nguu", "nguy", "nguyen", "nguyet", "nha", "nhac", "nhai", "nham", "nhan", "nhang", "nhanh", "nhao", "nhap", "nhat", "nhau", "nhay", "nhe", "nhech", "nhem", "nhen", "nhenh", "nheo", "nheu", "nhi", "nhiec", "nhiem", "nhien", "nhiep", "nhiet", "nhieu", "nhin", "nhip", "nho", "nhoang", "nhoay", "nhoc", "nhoe", "nhoen", "nhoi", "nhom", "nhon", "nhong", "nhop", "nhot", "nhu", "nhua", "nhuan", "nhuc", "nhue", "nhun", "nhung", "nhuoc", "nhuom", "nhuong", "nhut", "nhuyen", "ni", "nich", "niem", "nien", "nieng", "niet", "nieu", "nin", "ninh", "nit", "niu", "no", "noan", "noc", "noi", "nom", "non", "nong", "nop", "not", "nu", "nua", "nuc", "nui", "num", "nung", "nuoc", "nuoi", "nuom", "nuong", "nuot", "nuou", "nup", "nut", "oa", "oac", "oai", "oan", "oang", "oanh", "oat", "oc", "oe", "oi", "om", "on", "ong", "op", "ot", "pa", "pe", "pha", "phac", "phach", "phai", "pham", "phan", "phang", "phanh", "phao", "phap", "phat", "phau", "phay", "phe", "phen", "pheng", "phep", "phet", "pheu", "phi", "phia", "phich", "phiem", "phien", "phieu", "phim", "phinh", "pho", "phoi", "phom", "phon", "phong", "phop", "phot", "phu", "phua", "phuc", "phui", "phun", "phung", "phuong", "phut", "pic", "pin", "pinh", "pit", "pom", "puoc", "qua", "quac", "quai", "quam", "quan", "quang", "quanh", "quap", "quat", "quau", "quay", "que", "quech", "quen", "quenh", "queo", "quet", "queu", "qui", "quo", "quoc", "quy", "quyen", "quyet", "quynh", "ra", "rac", "rach", "rai", "ram", "ran", "rang", "ranh", "rao", "rap", "rat", "rau", "ray", "re", "rech", "ren", "renh", "reo", "rep", "ret", "reu", "ri", "ria", "rieng", "riet", "rieu", "rin", "rinh", "rit", "riu", "ro", "roc", "roi", "rom", "ron", "rong", "rop", "rot", "ru", "rua", "ruc", "rui", "rum", "run", "rung", "ruoc", "ruoi", "ruom", "ruong", "ruot", "ruou", "rut", "ruy", "sa", "sac", "sach", "sai", "sam", "san", "sang", "sanh", "sao", "sap", "sat", "sau", "say", "se", "sen", "senh", "sep", "set", "seu", "si", "siem", "sieng", "siet", "sieu", "sin", "sinh", "sit", "so", "soan", "soat", "soc", "soi", "som", "son", "song", "sop", "sot", "su", "sua", "suat", "suc", "sui", "sum", "sun", "sung", "suoi", "suon", "suong", "suot", "sup", "sut", "suu", "suy", "suyt", "ta", "tac", "tach", "tai", "tam", "tan", "tang", "tanh", "tao", "tap", "tat", "tau", "tay", "te", "tech", "tem", "ten", "teng", "tenh", "teo", "tep", "tet", "tha", "thac", "thach", "thai", "tham", "than", "thang", "thanh", "thao", "thap", "that", "thau", "thay", "the", "them", "then", "thenh", "theo", "thep", "thet", "theu", "thi", "thia", "thich", "thiec", "thiem", "thien", "thieng", "thiep", "thiet", "thieu", "thin", "thinh", "thit", "thiu", "tho", "thoa", "thoai", "thoan", "thoang", "thoat", "thoc", "thoi", "thom", "thon", "thong", "thot", "thu", "thua", "thuan", "thuat", "thuc", "thue", "thui", "thum", "thun", "thung", "thuo", "thuoc", "thuon", "thuong", "thuot", "thut", "thuy", "thuyen", "thuyet", "ti", "tia", "tich", "tiec", "tiem", "tien", "tieng", "tiep", "tiet", "tieu", "tim", "tin", "tinh", "tit", "tiu", "to", "toa", "toac", "toai", "toan", "toang", "toat", "toc", "toe", "toen", "toi", "tom", "ton", "tong", "top", "tot", "tra", "trac", "trach", "trai", "tram", "tran", "trang", "tranh", "trao", "trap", "trat", "trau", "tray", "tre", "tren", "treo", "treu", "tri", "trich", "trien", "triet", "trieu", "trinh", "triu", "tro", "troc", "troi", "trom", "tron", "trong", "trot", "tru", "trua", "truan", "truat", "truc", "trui", "trum", "trung", "truoc", "truong", "truot", "trut", "truu", "truy", "truyen", "tu", "tua", "tuan", "tuc", "tue", "tuech", "tui", "tum", "tun", "tung", "tuoc", "tuoi", "tuom", "tuon", "tuong", "tuot", "tut", "tuu", "tuy", "tuyen", "tuyet", "ty", "ua", "uan", "uat", "uc", "ue", "um", "un", "ung", "uoc", "uom", "uon", "uong", "uop", "uot", "up", "ut", "uu", "uy", "uyen", "uynh", "va", "vac", "vach", "vai", "vam", "van", "vang", "vanh", "vao", "vap", "vat", "vay", "ve", "vec", "ven", "venh", "veo", "vet", "veu", "vi", "via", "viec", "viem", "vien", "vieng", "viet", "vinh", "vit", "vo", "voc", "voi", "vom", "von", "vong", "vop", "vot", "vu", "vua", "vuc", "vui", "vun", "vung", "vuon", "vuong", "vuot", "vut", "vuu", "xa", "xac", "xach", "xai", "xam", "xan", "xang", "xanh", "xao", "xap", "xau", "xay", "xe", "xec", "xech", "xem", "xen", "xenh", "xeo", "xep", "xet", "xeu", "xi", "xia", "xich", "xiem", "xien", "xieng", "xiet", "xieu", "xin", "xinh", "xiu", "xo", "xoa", "xoai", "xoan", "xoang", "xoanh", "xoay", "xoc", "xoen", "xoi", "xom", "xon", "xong", "xop", "xot", "xu", "xua", "xuan", "xuat", "xuc", "xue", "xui", "xum", "xun", "xung", "xuoi", "xuong", "xup", "xut", "xuyen", "xuyt", "yem", "yen", "yeu"];
        for (var i = 0; i < arrSplitWords.length; i++) {
            if (i <= limitSearch) {
                if (binarySearch(arrSplitWords[i], singleWords) >= 0) {
                    wCount++;
                }
            } else {
                break;
            }
        }
        if (arrSplitWords.length <= limitSearch && wCount <= limitSearch / 2 + 1) {
            wCount = -1;
        };
        return (wCount > 0) ? 'vi_ascii' : 'en';
    }
};

function query(term, tab) {
    console.log("query Tracau.vn for: \"" + term + "\"");
    var lang = detectLanguage(term);
    console.log("lang: " + lang);
    var url = "http://api.tracau.vn/WBBcwnwQpV89/" + term + "/" + lang + "/a";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;

            // remove 'a(' at the beginning and ');' at the end of response text because it's JSONP
            // and we cant execute JSONP callback inside a chrome extension
            response = response.slice(2);
            response = response.slice(0, -2);

            console.log("xhr response: " + response);

            chrome.tabs.sendMessage(tab.id, {request: "showTracauQueryResult", result: JSON.parse(response)}, function(response) {});  
        }
    }; 
    xhr.open("GET", url);
    xhr.send();
}

function onClickHandler(info, tab) {
    var sText = info.selectionText;

    // query tracau.vn
    query(sText, tab);

    // show query box (loading indicator). Result will be updated inside query callback
    chrome.tabs.sendMessage(tab.id, {request: "showTracauQueryBox", term: sText}, function(response) {});  
};

// ID to manage the context menu entry
var cmid;

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.request === 'updateTracauContextMenu') {
        var selectionText = msg.selection;
        console.log("selectionText: " + selectionText);
        if (selectionText == '') {
            // Remove the context menu entry
            if (cmid != null) {
                chrome.contextMenus.remove(cmid);
                cmid = null; // Invalidate entry now to avoid race conditions
            } // else: No contextmenu ID, so nothing to remove
        } else { // Add/update context menu entry
            var options = {
                title: "Search Tracau.vn for \"" + selectionText + "\"",
                contexts: ['selection'],
                onclick: onClickHandler
            };
            if (cmid != null) {
                chrome.contextMenus.update(cmid, options);
            } else {
                // Create new menu, and remember the ID
                cmid = chrome.contextMenus.create(options);
            }
        }
    }
});
