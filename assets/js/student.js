const defaultStudents = [
    { id: "2025-02907", name: "ABAH, NADZMI GAPUR.", email: "ty202502907@wmsu.edu.ph", phone: "09525211681", course: "ACT-AD" },
    { id: "2025-02697", name: "AGEAS, ROVHIC CHAWEE ALESNA.", email: "ty202502697@wmsu.edu.ph", phone: "09756606540", course: "ACT-AD" },
    { id: "2025-01218", name: "AHAMAD, AINEE HANA TAN.", email: "ty202501218@wmsu.edu.ph", phone: "09662668468", course: "ACT-AD" },
    { id: "2025-02109", name: "AKBARA, AMILHAN MANCERAS.", email: "ty202502109@wmsu.edu.ph", phone: "09539430119", course: "ACT-AD" },
    { id: "2025-01689", name: "ALAVERA, RHAINIEL GENESIS G..", email: "ty202501689@wmsu.edu.ph", phone: "09914790767", course: "ACT-AD" },
    { id: "2025-02141", name: "ALVAREZ, JERIC LINTO.", email: "ty202502141@wmsu.edu.ph", phone: "09941895979", course: "ACT-AD" },
    { id: "2025-02972", name: "BAGARINAO, ONYX FERRER.", email: "ty202502972@wmsu.edu.ph", phone: "09706995348", course: "ACT-AD" },
    { id: "2025-00580", name: "BAKILI, MUTALIB ALAJA.", email: "ty202500580@wmsu.edu.ph", phone: "09752773988", course: "ACT-AD" },
    { id: "2025-02122", name: "BANGAHAN, MOHAMMAD RIDZMAR-YAQEEN DAHAM.", email: "ty202502122@wmsu.edu.ph", phone: "09082174522", course: "ACT-AD" },
    { id: "2025-02106", name: "CABUAL, CHRISTIAN JOSHUA FELICIANO.", email: "ty202502106@wmsu.edu.ph", phone: "09956656073", course: "ACT-AD" },
    { id: "2025-01791", name: "DELA CRUZ, SHEINA LOVE ABDULKADIL.", email: "ty202501791@wmsu.edu.ph", phone: "09559703541", course: "ACT-AD" },
    { id: "2025-01344", name: "ESPIRITU, ARCHILLES HALILONG.", email: "ty202501344@wmsu.edu.ph", phone: "09625133274", course: "ACT-AD" },
    { id: "2025-01246", name: "FLORES, JOSHUA PEPITO.", email: "ty202501246@wmsu.edu.ph", phone: "09976101850", course: "ACT-AD" },
    { id: "2025-02969", name: "GALLEPOSO, SAM DANIEL .", email: "ty202502969@wmsu.edu.ph", phone: "09923503607", course: "ACT-AD" },
    { id: "2025-02128", name: "HITGANO, RICH CEZARINA LAYCA ALFON.", email: "ty202502128@wmsu.edu.ph", phone: "09178401442", course: "ACT-AD" },
    { id: "2025-02864", name: "MAMANTAR, JHERYANNE JULIAN.", email: "TY202502864@wmsu.edu.ph", phone: "N/A", course: "ACT-AD" },
    { id: "2025-02717", name: "MOHAMMAD, ALLYSA NAVARRO.", email: "ty202502717@wmsu.edu.ph", phone: "09533511003", course: "ACT-AD" },
    { id: "2025-01220", name: "PEREYRA, KRIS MARIANE DRAGON.", email: "ty202501220@wmsu.edu.ph", phone: "09682079072", course: "ACT-AD" },
    { id: "2025-00650", name: "PRIAS, CARL IAN REYES.", email: "ty202500650@wmsu.edu.ph", phone: "09941883048", course: "ACT-AD" },
    { id: "2025-03364", name: "PUERTO, ANGEL GRACE PAING.", email: "TY202503364@wmsu.edu.ph", phone: "N/A", course: "ACT-AD" },
    { id: "2025-00538", name: "PULA, CRISDIANTHY LUKUH.", email: "ty202500538@wmsu.edu.ph", phone: "09559906343", course: "ACT-AD" },
    { id: "2025-00296", name: "SAILELA, CASSANDRA ASHLEY BAYABOS.", email: "ty202500296@wmsu.edu.ph", phone: "09684278312", course: "ACT-AD" },
    { id: "2025-00716", name: "SOLAMBAO, KRYZEL JOY SALAHOP.", email: "ty202500716@wmsu.edu.ph", phone: "09060441644", course: "ACT-AD" },
    { id: "2025-02680", name: "TAGAYAN, YLLISHEDRINE HAMDANI.", email: "ty202502680@wmsu.edu.ph", phone: "09947536766", course: "ACT-AD" },
    { id: "2025-00169", name: "TAMPARONG, NOVIE JOZANE DICHOSO.", email: "ty202500169@wmsu.edu.ph", phone: "09533048169", course: "ACT-AD" },
    { id: "2025-00272", name: "TAROG, REYMER BOLO.", email: "ty202500272@wmsu.edu.ph", phone: "09947932120", course: "ACT-AD" },
    { id: "2017-01278", name: "TELAN, YVONNE REDJ FRANCISCO.", email: "lc201701278@wmsu.edu.ph", phone: "09359102276", course: "ACT-AD" },
    { id: "2025-00326", name: "TUBLE, DARELL DELEON.", email: "ty202500326@wmsu.edu.ph", phone: "09937089426", course: "ACT-AD" },
    { id: "2025-00290", name: "VICENTE, ELLICE ROSE SOLANO.", email: "ty202500290@wmsu.edu.ph", phone: "09934738659", course: "ACT-AD" },
    { id: "2025-02601", name: "VILLALOBOS, RURIK RAE RELLON.", email: "ty202502601@wmsu.edu.ph", phone: "09205384347", course: "ACT-AD" }
];

let students = JSON.parse(localStorage.getItem("students")) || [...defaultStudents];

let syncRequired = false;
defaultStudents.forEach(ds => {
    if (!students.some(s => s.id === ds.id)) {
        students.push(ds);
        syncRequired = true;
    }
});

if (syncRequired) {
    localStorage.setItem("students", JSON.stringify(students));
}

students.sort((a, b) => a.name.localeCompare(b.name));

function logAttendance(id, name, time, status) {
    let logs = JSON.parse(localStorage.getItem("attendance_logs")) || [];
    logs.push({ id, name, time, status, date: new Date().toLocaleDateString() });
    localStorage.setItem("attendance_logs", JSON.stringify(logs));
}

function renderTable() {
    const tableBody = document.querySelector("#studentTable tbody");
    if(!tableBody) return;
    
    students.sort((a, b) => a.name.localeCompare(b.name));
    
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
        tableBody.innerHTML += `
            <tr>
                <td style="font-family: monospace; color: var(--crimson); font-weight: 700;">${student.id}</td>
                <td style="font-weight: 700; color: white;">${student.name}</td>
                <td style="color: var(--text-dim); font-size: 0.8rem;">${student.email}</td>
                <td>
                    <button onclick="deleteStudent(${index})" style="color: #ff4d4d; background: none; border: 1px solid #4a0d18; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 0.65rem; font-weight: 800;">REMOVE</button>
                </td>
            </tr>
        `;
    });
    renderQuickRemoveList();
}

function renderQuickRemoveList() {
    const listContainer = document.getElementById("quickRemoveList");
    if(!listContainer) return;
    listContainer.innerHTML = "";
    students.forEach((student, index) => {
        listContainer.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <div style="text-align: left;">
                    <div style="font-weight: bold; color: white;">${student.name}</div>
                </div>
                <button onclick="deleteStudent(${index})" style="background: #4a0d18; color: #ff9999; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.7rem;">Remove</button>
            </div>
        `;
    });
}

function addStudent() {
    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const phone = document.getElementById("studentPhone").value;
    const course = document.getElementById("studentCourse").value;

    if (!id || !name || !email || !phone || !course) {
        alert("Please fill all fields");
        return;
    }

    students.push({ id, name, email, phone, course });
    localStorage.setItem("students", JSON.stringify(students));
    renderTable();
    if (typeof updateDashboardStats === 'function') updateDashboardStats();
    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentCourse").value = "";
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    renderTable();
    if (typeof updateDashboardStats === 'function') updateDashboardStats();
}

function clearAll() {
    if (confirm("Are you sure?")) {
        localStorage.removeItem("students");
        students = [];
        renderTable();
    }
}

renderTable();
