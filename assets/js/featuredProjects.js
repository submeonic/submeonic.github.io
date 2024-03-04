
const featuredProjectData = {
    'project1': {
        title: 'Submeonic Drift',
        subtitle: 'VR Arcade Racer | Present',
        videoUrl: 'https://www.youtube.com/embed/V6wGf1PVG28',
        roles: 'Designer, Programmer, 3D Artist, VFX Artist',
        stack: 'Unity, Blender, Maya, ShaderGraph, OpenGL, C#',
        overview: 'Submeonic Drift is an arcade racing game designed for VR. It features shaders that curve the world and offer an extremely smoothe and eyecatching experience. Special focus was put on creating intuitive motion controls and tight handling. Planned features include multi-player support, procedurally generated tracks, and opponent drivers',
        contributors: 'Individual',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project2': {
        title: 'Distant Planets Dream of You Too',
        subtitle: 'Gaze Interaction Comic | Spring 2023',
        videoUrl: 'https://www.youtube.com/embed/I5_2dyAcwDI',
        roles: 'Project Leader, Interaction Designer, Programmer, SFX Designer, Composer',
        stack: 'Unity, OpenCV, Photoshop, Ableton Live, C#, Python',
        overview: 'An interactive comic that uses gaze interaction to explore ideas in the realm of quantum mechanics. The project was designed as a proof of concept for a comic that adapts and changes based on what the user pays attention to. It features multiple ending combinations and a dynamic soundtrack.',
        contributors: 'Mackenzie Burt, Casey Heiman, Vale Smith',
        repositoryUrl: 'https://github.com/submeonic/WebcamGazeInteractionComic',
        tryUrl: 'https://submeonic.itch.io/distant-planets-dream-of-you-too'
    },
    'project3': {
        title: 'Temporal Tides',
        subtitle: 'Paradox Naval Combat | Fall 2023',
        videoUrl: 'https://www.youtube.com/embed/XR885q3O0XQ',
        roles: 'Gameplay Designer, Programmer, VFX Artist, 3D Modeler',
        stack: 'Unity, Blender, ShaderGraph, OpenGl, C#',
        overview: 'Navigate the treacherous waters aboard a ship adjacent to a massive black hole. The main gameplay loop is a ‘Temporal Paradox’, where the player’s actions are simultaneously reflected and opposed by the echoes from an alternate timeline. Earn points by shooting alternate versions of yourself, but be careful to avoid crossfire when your variants mirror your actions. The game also introduces a ‘Predestination Paradox’, challenging the concept of free will versus determinism, as players confront the consequences of their actions in real-time through their mirrored adversaries. This chaotic and hectic gameplay experience serves as a thrilling exploration of paradoxical phenomena, immersing players in a universe where every action has an equal and opposite reaction, questioning the very nature of cause and effect.',
        contributors: 'Konner Pierce, Heaven Rust, Carson Strout, Jacob Thrall',
        repositoryUrl: '',
        tryUrl: 'https://papadaplus.itch.io/temporal-tides'
    },
    'project4': {
        title: 'Dead West',
        subtitle: '',
        videoUrl: '',
        roles: '',
        stack: '',
        overview: '',
        contributors: '',
        repositoryUrl: '',
        tryUrl: ''
    },
};

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project-container');

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

    // Event listeners for buttons
    document.getElementById('project-repo-button').addEventListener('click', function () {
        const url = this.dataset.url;
        if (url) window.open(url, '_blank');
    });

    document.getElementById('project-try-button').addEventListener('click', function () {
        const url = this.dataset.url;
        if (url) window.open(url, '_blank');
    });
});

function showFeaturedProjectDetails(projectId) {
    const projectInfo = featuredProjectData[projectId];

    if (projectInfo) {
        document.querySelector('.project-details-title').textContent = projectInfo.title;
        document.querySelector('.project-details-subtitle').textContent = projectInfo.subtitle;
        document.querySelector('.project-details-video').src = projectInfo.videoUrl;
        document.querySelector('.project-details-role').textContent = projectInfo.roles;
        document.querySelector('.project-details-stack').textContent = projectInfo.stack;
        document.querySelector('.project-details-overview').textContent = projectInfo.overview;
        document.querySelector('.project-details-contributors').textContent = projectInfo.contributors;

        const repoButton = document.getElementById('project-repo-button');
        const tryButton = document.getElementById('project-try-button');

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