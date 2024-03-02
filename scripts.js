const exams = [
    { name: "Luyện tập", status: "open", link: "/page1.html"},
    { name: "Giữa kỳ", status: "open" , link: "/page1.html"},
    { name: "Cuối kỳ", status: "restricted", link: "/page1.html"},
];

const examsList = document.getElementById('examsList');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');

function displayExams() {
    examsList.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();
    const filter = filterSelect.value;

    exams.forEach(exam => {
        if ((exam.name.toLowerCase().includes(searchTerm) || searchTerm === '') &&
            (filter === 'all' || exam.status === filter)) {
            const li = document.createElement('li');
            li.className = 'examItem';
            li.textContent = exam.name;
            li.onclick = function(){
                if (exam.link) {
                    window.location.href = exam.link;
                }
            }
            examsList.appendChild(li);
        }
    });
    
}

 //
  
searchInput.addEventListener('input', displayExams);
filterSelect.addEventListener('change', displayExams);


displayExams();
