class StudentList { 
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderStudentList(this.students); 
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.students = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderStudentList(students, containerId = 'studentList') {
        const studentListContainer = document.getElementById(containerId);
        studentListContainer.innerHTML = '';

        if (students.length === 0) {
            studentListContainer.innerHTML = '<p>No students found</p>';
            return;
        }

        // Render each student's details using card layout
        students.forEach(student => {
            const enrolledDate = student.student_enrolled_date ? student.student_enrolled_date : 'N/A';
            const card = document.createElement('div');
            card.classList.add('card', 'mb-3');
            card.style.width = '100%';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${student.student_name}</h5>
                    <p class="card-text"><strong>Program:</strong> ${student.student_program}</p>
                    <p class="card-text"><strong>Enrolled Date:</strong> ${enrolledDate}</p>
                </div>
            `;
            studentListContainer.appendChild(card);
        });
    }

    bindSearchEvent() {
        const studentSearchBar = document.getElementById('studentSearchBar');
        const studentListContainer = document.getElementById('studentList');

        studentSearchBar.addEventListener('input', () => {
            this.filterStudents(studentSearchBar.value, 'studentList');
        });
    }

    filterStudents(query, containerId) {
        const filteredStudents = this.students.filter(student => {
            const studentDetails = `${student.student_name} ${student.student_program} ${student.student_enrolled_date}`;
            return studentDetails.toLowerCase().includes(query.toLowerCase());
        });

        this.renderStudentList(filteredStudents, containerId);
    }
}

const studentList = new StudentList('applet4.json');
