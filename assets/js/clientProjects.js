const clientProjectData = {
    'project1': {
        title: 'Sounds of the Depths',
        subtitle: 'Ability Platformer | Fall 2023',
        videoUrl: 'https://www.youtube.com/embed/QPgFnWwPFME',
        roles: 'Gameplay Designer, Programmer, Artist, SFX Designer, Dynamic Audio Designer',
        stack: 'Unity, Photoshop, Ableton Live, PlusMusic.Ai, C#',
        overview: "Created as a playable demonstration of PlusMusic's Unity plugin. Intended to showcase adaptive sound tracking. Also designed functional UI display for PlusMusic plugin status and control. Corresponded with PlusMusic Head of Marketing to nail down design requirements.",
        contributors: 'Individual',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project2': {
        title: 'Plus Music Graphic Video',
        subtitle: 'Animated Graphics | Summer 2023',
        videoUrl: 'https://www.youtube.com/embed/4CqYB9phfDY',
        roles: 'Animator, Graphic Designer',
        stack: 'After Effects, Photoshop',
        overview: "Animated a graphic video demonstrating PlusMusic's use of AI in their platform. Corresponded with PlusMusic CEO to nail down design requirements over multiple itterations.",
        contributors: 'Individual',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project3': {
        title: 'Geo-Science Interactive Visualization',
        subtitle: 'Visualization of PHD Research | Spring 2024',
        videoUrl: '',
        roles: 'Terrain Artist, 3D Modeler, Programmer, UI Designer',
        stack: 'Unity, Agisoft Metashape, Blender, Photoshop, C#',
        overview: "This application has been developed for an exhibit at the 2024 Personal Structures Exhibition in Venice, Italy. It displays geological drone data gathered by Boise State University's Human-Environment Systems department in an interactive manner. Exhibitors are able to immerse themselves in the environment while learning about invasive plant species in Idaho.",
        contributors: 'Dr. Megan Cattau, Kaj Forney, Carson Strout, Mitchell Oliarny, Jayden Quallio',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project4': {
        title: 'ABC Stories',
        subtitle: 'Educational AR App | Spring 2024',
        videoUrl: 'https://www.youtube.com/embed/f6TUAltSobQ',
        roles: 'UI Designer, Programmer',
        stack: 'Swift, UIKit, ARKit, Xcode, Photoshop, Figma',
        overview: 'ABC Stories is an AR application for iOS designed to help kids learn handwritting in a fun and engaging format. I was part of the 2024 update team, working on localizing data storage and data management, refreshing the UI, and AR features.',
        contributors: 'Kaj Forney, Carson Strout, Mitchell Oliarny, Jayden Quallio',
        repositoryUrl: '',
        tryUrl: ''
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.client-project-container');

    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Remove 'selected' class from all projects
            projects.forEach(p => p.classList.remove('selected'));
            // Add 'selected' class to clicked project
            this.classList.add('selected');
            // Get project ID
            const projectId = this.getAttribute('data-project-id');
            showProjectDetails(projectId);
        });
    });
});

function showClientProjectDetails(projectId) {
    const projectInfo = clientProjectData[projectId];

    if (projectInfo) {
        document.querySelector('.client-project-details-title').textContent = projectInfo.title;
        document.querySelector('.client-project-details-subtitle').textContent = projectInfo.subtitle;
        document.querySelector('.client-project-details-video').src = projectInfo.videoUrl;
        document.querySelector('.client-project-details-role').textContent = projectInfo.roles;
        document.querySelector('.client-project-details-stack').textContent = projectInfo.stack;
        document.querySelector('.client-project-details-overview').textContent = projectInfo.overview;
        document.querySelector('.client-project-details-contributors').textContent = projectInfo.contributors;

        const repoButton = document.getElementById('client-project-repo-button');
        const tryButton = document.getElementById('client-project-try-button');

        if (projectInfo.repositoryUrl) {
            repoButton.dataset.url = projectInfo.repositoryUrl;
            repoButton.style.display = 'inline-block';
        } else {
            repoButton.style.display = 'none';
        }

        if (projectInfo.tryUrl) {
            tryButton.dataset.url = projectInfo.tryUrl;
            tryButton.style.display = 'inline-block';
        } else {
            tryButton.style.display = 'none';
        }
    }
}