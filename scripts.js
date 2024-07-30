const sidebar = document.querySelector(".sidebar")
const contentHome = document.querySelector(".content-home")
const contentProjects = document.querySelector(".content-projects")
const contentAbout = document.querySelector(".content-about")

const sheetContents = document.getElementsByClassName("sheet-content")

Array.from(sheetContents).forEach(element => {
    element.addEventListener("click", (e) => {
        e.stopPropagation();
    })
});

document.querySelector("#year").innerHTML = new Date().getFullYear();

function showSidebar() {
    adjustHeight()
    sidebar.style.left = 0
}

function hideSidebar() {
    resetHeight()
    sidebar.style.left = "100%"
}

function hideAllSheets() {
    hideSidebar()
    hideSheet()
    adjustHeight()
}

function btnClickHomeInSidebar() {
    hideSidebar()
    hideAbout()
    hideProjects()
    showHome()
    adjustHeight()
}
function btnClickProjectsInSidebar() {
    hideSidebar()
    hideHome()
    hideAbout()
    showProjects()
    adjustHeight()
}
function btnClickAboutInSidebar() {
    hideSidebar()
    hideHome()
    hideProjects()
    showAbout()
    adjustHeight()
}

function btnClickHome() {
    resetHeight()
    hideAbout()
    hideProjects()
    showHome()
    adjustHeight()
}
function btnClickProjects() {
    hideHome()
    hideAbout()
    showProjects()
    adjustHeight()
}
function btnClickAbout() {
    hideHome()
    hideProjects()
    showAbout()
    adjustHeight()
}

function showHome() {
    contentHome.style.display = "flex"
}
function hideHome() {
    contentHome.style.display = "none"
}

function showProjects() {
    contentProjects.style.display = "flex"
}
function hideProjects() {
    contentProjects.style.display = "none"
}

function showAbout() {
    contentAbout.style.display = "flex"
}
function hideAbout() {
    contentAbout.style.display = "none"
}

const sheet = document.querySelector(".sheet")
const sheetContentInsert = document.querySelector("#sheet-content-insert")


function resetHeight() {
    sheet.style.height = "auto";
    sidebar.style.height = "auto";
}

function adjustHeight() {
    sheet.style.height = document.body.scrollHeight + 'px';
    sidebar.style.height = document.body.scrollHeight + 'px';
}

// Adjust the div height initially and on window resize
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);

function showSheet(item) {

    if (item == "webcccadtools")
        insert(htmlwebcccadtools)
    else if (item == "cccadtools")
        insert(htmlcccadtools)
    else if (item == "webccsupport")
        insert(htmlwebccsupport)
    else if (item == "sgciviltools")
        insert(htmlsgciviltools)
    else if (item == "sgdatavalid")
        insert(htmlsgdatavalid)
    else if (item == "sgbimcomplete")
        insert(htmlsgbimcomplete)
    else if (item == "skoda")
        insert(htmlskoda)
    else if (item == "cis")
        insert(htmlcis)
    else if (item == "michal")
        insert(htmlmichal)
    else if (item == "skills")
        insert(htmlskills)
    else if (item == "experience")
        insert(htmlexperience)
    else if (item == "education")
        insert(htmleducation)

    sheet.style.left = 0
}
function hideSheet() {
    resetHeight()
    sheet.style.left = "100%"
}

function insert(html) {
    sheetContentInsert.innerHTML = html
}

let htmlwebcccadtools = `
                    <img class="icon" src="images/projects/img-web-cccadtools.png" alt="">
                    <h2>CCcadTools</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://cccadtools.cadconsulting.cz/" target="_blank">
                            <p>cccadtools.cadconsulting.cz</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">Blazor Server, .NET6, Bootstrap, EF, MySQL, JS</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Product page for add-on CCcadTools.</p>
                    </div>
`;
let htmlcccadtools = `
                    <img class="icon" src="images/projects/img-app-cccadtools.png" alt="">
                    <h2>CCcadTools</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://cccadtools.cadconsulting.cz/" target="_blank">
                            <p>cccadtools.cadconsulting.cz</p>
                        </a>
                        <a href="https://apps.autodesk.com/ACD/en/Detail/Index?id=7169733210297483692&appLang=en&os=Win64" target="_blank">
                            <p>Autodesk App Store</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">C#, .NET4.8, .NET8, WPF</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Add-on for all Autodesk Autocad based products. Implements features that are not available in the software.</p>

                    </div>
`;
let htmlwebccsupport = `
                    <img class="icon" src="images/projects/img-web-ccsupport.png" alt="">
                    <h2>CCsupport</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://sg.ccsupport.cz/" target="_blank">
                            <p>sg.ccsupport.cz</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">Dokuwiki</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Web help page for all Sudop Group applications.</p>
                    </div>
`;
let htmlsgciviltools = `
                    <img class="icon" src="images/projects/img-app-sgciviltools.png" alt="">
                    <h2>SG Civil Tools</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://sg.ccsupport.cz/sgciviltools" target="_blank">
                            <p>sg.ccsupport.cz</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">C#, .NET4.8, .NET8, WPF, WebView2</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Add-on for Autodesk Civil 3D. Help users to design linear structures based on Czech standards.</p>
                    </div>
`;
let htmlsgdatavalid = `
                    <img class="icon" src="images/projects/img-app-sgdesignvalidator.png" alt="">
                    <h2>SG Civil Tools</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://sg.ccsupport.cz/sgcivildesignvalidator" target="_blank">
                            <p>sg.ccsupport.cz/sgcivildesignvalidator</p>
                        </a>
                        <a href="https://sg.ccsupport.cz/sgcivilvalidator" target="_blank">
                            <p>sg.ccsupport.cz/sgcivilvalidator</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">C#, .NET4.8, .NET8, WPF, WebView2</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Add-ons for Autodesk Civil 3D. Help users to validate their design and data based on Czech standards.</p>
                    </div>
`;
let htmlsgbimcomplete = `
                    <img class="icon" src="images/projects/img-app-sgcivilbimcomplete.png" alt="">
                    <h2>SG Civil Tools</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://sg.ccsupport.cz/sgcivilbimcomplete" target="_blank">
                            <p>sg.ccsupport.cz/sgcivilbimcomplete</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">C#, .NET4.8, .NET8, WPF, WebView2</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Add-on for Autodesk Civil 3D. Helps users to create BIM data.</p>
                    </div>
`;
let htmlskoda = `
                    <img class="icon" src="images/projects/img-ios-skoda.webp" alt="">
                    <div class="img-collection">
                        <img class="image" src="images/projects/skoda-1.webp" alt="">
                        <img class="image" src="images/projects/skoda-2.webp" alt="">
                    </div>
                    <h2>MyŠkoda Essentials</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://apps.apple.com/cz/app/my%C5%A1koda-essentials/id1161648654" target="_blank">
                            <p>Apple App Store</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">UIKit, SwiftUI, Swift Package Manager, Firebase, SwiftLint, XCTest, Azure DevOps</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">App for remote controlling Škoda cars.</p>
                    </div>
`;
let htmlcis = `
                    <img class="icon" src="images/projects/img-iso-cis.webp" alt="">
                    <div class="img-collection">
                        <img class="image" src="images/projects/cis-1.webp" alt="">
                        <img class="image" src="images/projects/cis-2.webp" alt="">
                    </div>
                    <h2>Calendar Information Service</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <a href="https://apps.apple.com/cz/app/calendar-information-service/id991423492?platform=iphone" target="_blank">
                            <p>Apple App Store</p>
                        </a>
                    </div>
                    <div class="sheet-part">
                        <h3>Used technologies:</h3>
                        <p class="sheet-description">UIKit, SwiftUI, Swift Package Manager, SwiftLint, XCTest, Fastlane</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Description:</h3>
                        <p class="sheet-description">Calendar information service (timetracking, reports, workfunds, namedays, bank holidays).</p>
                    </div>
`;
let htmlmichal = `
                    <img class="icon" src="images/projects/img-michal.png" alt="">
                    <h2>Michal Heczko</h2>
                   
                    <div class="sheet-part">
                        <p class="sheet-description">I’m a dedicated and methodical software development professional with a proven track record in delivering high-quality applications. As a self-employed developer, I manage every aspect of the application lifecycle, from contract negotiation to development and bug fixes. I thrive in collaborative environments and continually seek opportunities to enhance my skills. I embrace new challenges with dynamic thinking and determination.</p>
                    </div>
                    <div class="sheet-part">
                        <h3>E-mail:</h3>
                        <a href="mailto:info@msharp.cz" class="sheet-description">info@msharp.cz</a>
                    </div>
`;
let htmlskills = `
                    <h2>Skills</h2>
                    <div class="sheet-part">
                        <h3>Web:</h3>
                        <p class="sheet-description">Web design, HTML, CSS, JS, Blazor, Minimal API, Entity Framework, Bootstrap, SignalR</p>
                    </div>
                    <div class="sheet-part">
                        <h3>.NET:</h3>
                        <p class="sheet-description">C#, .NET 4.8, .NET 8, WPF, XUnit, Fluent Assertion</p>
                    </div>
                    <div class="sheet-part">
                        <h3>iOS:</h3>
                        <p class="sheet-description">SwiftUI, UIkit, ReactiveKit, SPM, XCTest</p>
                    </div>
                    <div class="sheet-part">
                        <h3>Others:</h3>
                        <p class="sheet-description">English, MySQL, Python, MVVM, TDD, DI, SQP, Azure devops, Firebase,  jira, UI/UX, Figma</p>
                    </div>
`;
let htmlexperience = `
                    <h2>Experience</h2>
                    <div class="sheet-part">
                        <h3>.NET</h3>
                        <div class="sheet-part-stretch">
                            <h4>Cadconsulting</h4>
                        </div>
                        <p class="sheet-description">Developed an internal application and an app for Sudop Group, including a robust system for validation, licensing, and distribution. Created subassemblies for Autodesk Civil 3D software and established a product page, along with web-based help documentation for all applications.</p>
                    </div>
                    <div class="sheet-part">
                        <h3>iOS</h3>
                        <div class="sheet-part-stretch">
                            <h4>Qinshift</h4>
                        </div>
                        <p class="sheet-description">I worked as an iOS programmer, developing an internal app and MyŠkoda app that allowed users to control their cars.</p>
                    </div>
                    <div class="sheet-part">
                        <h3>.NET</h3>
                        <div class="sheet-part-stretch">
                            <h4>Arkance Systems</h4>
                        </div>
                        <p class="sheet-description">I was responsible for the entire lifecycle of CivilTools and Potrubák apps, from development to customer support.</p>
                    </div>
`;
let htmleducation = `
                    <h2>Education</h2>
                    <div class="sheet-part">
                        <h3>VUT Brno</h3>
                        <div class="sheet-part-stretch">
                            <h4>Faculty of Civil Engineering</h4>
                        </div>
                        <p class="sheet-description">Master's and Bachelor's Degree</p>
                    </div>
`;