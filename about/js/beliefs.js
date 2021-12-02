// ---------------------------------------- //
// VARIABLES
// ---------------------------------------- //

// Buttons
var trinityButton = document.getElementById("trinity");
var bibleButton = document.getElementById("bible");
var jesusButton = document.getElementById("jesus");
var salvationButton = document.getElementById("salvation");
var sacramentsButton = document.getElementById("sacraments");
var holySpiritButton = document.getElementById("holy-spirit");
var churchButton = document.getElementById("church");

// Display Properties
var selectedImg = document.getElementById("display");
var selectedValue = document.getElementById("selected-belief");
var valueInfo = document.getElementById("belief-info");

// Belief Titles
const TitleTrinity = "The Trinity";
const TitleBible = "The Bible";
const TitleJesus = "Jesus";
const TitleSalvation = "Salvation";
const TitleSacraments = "Sacraments";
const TitleHolySpirit = "The Holy Spirit";
const TitleChurch = "The Church";

// Belief Info
const InfoTrinity = "There is one God: infinite, eternal, almighty and perfect in homeliness,truth, and love. In the unity of the godhead, there are three Persons: Father, Son, and Holy Spirit co-exist, co-equal, co-eternal.";
const InfoBible = "We accept the entire Bible, Old Testament and New Testament as the written Word of God. The scriptures are the authoritative and normative guide for all Christian life, practice and doctrine.";
const InfoJesus = "Jesus is the only Savior for the sins of the world having shed His blood and died on Calvary’s cross. Salvation is found in our faith in what Jesus did for us on the Cross. We believe Jesus rose from the dead and is coming again.";
const InfoSalvation = "Humanity’s sin has separated itself from God, and the only way to restore the relationship is forgiveness offered through Jesus Christ, making us right before God and leading us on a life-long path to God. (Romans 5:12-19; Luke 24:47; Titus 3:5-7)";
const InfoSacraments = "Water baptism is a symbol of the cleansing power of the blood of Christ and a witness to our faith in the Lord Jesus Christ. Water baptism should be by immersion (Matthew 3:15-17, Acts 8:38-39).</br>The regular taking of the Lord’s Supper as an act of remembering what our Lord Jesus did for us on the cross.";
const InfoHolySpirit = "The Baptism in the Holy Spirit is a free gift for all believers that will give them strength to live life as a witness of Jesus Christ. (Acts 1:8; 2:4; 19:1-7)";
const InfoChurch = "There is one Holy Universal Church that has a mission to evangelize the world, disciple followers of Christ, worship God, and provide Christ-like works of compassion to all. (Mark 16:15, 16; 1 Corinthians 12:13; Ephesians 4:11-16; James 1:27)";

// ---------------------------------------- //
// FUNCTIONS
// ---------------------------------------- //

function trinity() {swap(TitleTrinity,InfoTrinity);}

function bible() {swap(TitleBible,InfoBible);}

function jesus() {swap(TitleJesus,InfoJesus);}

function salvation() {swap(TitleSalvation,InfoSalvation);}

function sacraments() {swap(TitleSacraments,InfoSacraments);}

function holySpirit() {swap(TitleHolySpirit,InfoHolySpirit);}

function church() {swap(TitleChurch,InfoChurch);}

// ---------------------------------------- //
// HELPER FUNCTIONS
// ---------------------------------------- //

function swap(value, info) {
    selectedValue.innerText = value;
    valueInfo.innerText = info;
 }

 trinity();