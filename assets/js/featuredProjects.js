
const featuredProjectData = {
    'project1': {
        title: 'Submeonic Drift',
        subtitle: 'VR Arcade Racer | Spring 2024',
        videoUrl: 'https://www.youtube-nocookie.com/embed/hFNnDMGZ7sI?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Designer, Programmer, 3D Artist, VFX Artist, Composer',
        stack: 'Unity, Blender, Maya, ShaderGraph, OpenGL, C#, Ableton Live',
        overview: 'Submeonic Drift is an arcade racing game designed for VR. It features shaders that curve the world and offer an extremely smoothe and eyecatching experience. Special focus was put on creating intuitive motion controls and tight handling. Planned features include multi-player support, procedurally generated tracks, and opponent drivers',
        contributors: 'Individual',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project2': {
        title: 'Distant Planets Dream of You Too',
        subtitle: 'Gaze Interaction Comic | Spring 2023',
        videoUrl: 'https://www.youtube-nocookie.com/embed/I5_2dyAcwDI?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Project Leader, Interaction Designer, Programmer, SFX Designer, Composer',
        stack: 'Unity, OpenCV, Photoshop, Ableton Live, C#, Python',
        overview: 'An interactive comic that uses gaze interaction to explore ideas in the realm of quantum mechanics. The project was designed as a proof of concept for a comic that adapts and changes based on what the user pays attention to. It features multiple ending combinations and a dynamic soundtrack.',
        contributors: 'Mackenzie Burt, Casey Heiman, Vale Smith',
        repositoryUrl: 'https://github.com/submeonic/WebcamGazeInteractionComic',
        tryUrl: 'https://submeonic.itch.io/distant-planets-dream-of-you-too'
    },
    'project3': {
        title: 'Sounds of the Depths',
        subtitle: 'Ability Platformer | Fall 2023',
        videoUrl: 'https://www.youtube-nocookie.com/embed/QPgFnWwPFME?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Gameplay Designer, Programmer, Artist, SFX Designer, Dynamic Audio Designer',
        stack: 'Unity, Photoshop, Ableton Live, PlusMusic.Ai, C#',
        overview: "Created as a playable demonstration of PlusMusic's Unity plugin. Intended to showcase adaptive sound tracking. Also designed functional UI display for PlusMusic plugin status and control. Corresponded with PlusMusic Head of Marketing to nail down design requirements.",
        contributors: 'Individual',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project4': {
        title: 'Temporal Tides',
        subtitle: 'Paradox Naval Combat | Fall 2023',
        videoUrl: 'https://www.youtube-nocookie.com/embed/XR885q3O0XQ?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Gameplay Designer, Programmer, VFX Artist, 3D Modeler',
        stack: 'Unity, Blender, ShaderGraph, OpenGl, C#',
        overview: 'Temporal tides is a naval combat game developed in a week for the 2023 Berkley Music/ Game Jam. We worked with a team of composers to deliver a fun and engaging experience for players. The game features a paradox mechanic where the enemy ships fire at the same trajectory as the player, allowing keen observers to take advantage by making ships fire at eachother for big combos. I designed and programmed the gameplay interactions as well as implementing VFX and Shaders that I had developed for my personal game "Submeonic Drift".',
        contributors: 'Konner Pierce, Heaven Rust, Carson Strout, Jacob Thrall',
        repositoryUrl: '',
        tryUrl: 'https://papadaplus.itch.io/temporal-tides'
    },
    'project5': {
        title: 'Visualization of 3D Point Clouds in VR',
        subtitle: 'Rendering Technique Research | Under Review for IEEE VR 2024',
        videoUrl: 'https://www.youtube-nocookie.com/embed/u4NaMHy6hY4?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Primary Author, Sole Developer, Data Set Constructor',
        stack: 'Unreal Engine, Niagara Particle System, NeRF Studio, CloudCompare, Meshlab, C++, UE Blueprints, Python',
        overview: "A specialized pipeline that optimizes the rendering of point clouds on standalone HMDs. We use a particle system usually used for high-performance particle effects to perform the rendering of the points. In this pipeline, the point cloud---including positions, colors, and normals---is encoded into textures that the HMD GPU can directly read. The particle system uses this data to instantiate particles that represent each point in the cloud, rendering them efficiently in the VR environment. As a result, we can render large and detailed point cloud datasets on standalone HMDs without sacrificing performance or visual fidelity. Our implementation uses the Unreal Engine's Niagara particle system but can be easily implemented in any similar particle system.",
        contributors: 'Translational AI Center (TrAC), Adarsh Krishnamurthy, Shambhavi Joshi',
        pdf: '',
        repositoryUrl: 'https://github.com/idealab-isu/VRPointCloud'
    },
    'project6': {
        title: 'Dead West',
        subtitle: 'Interactive Animation | Spring 2023',
        videoUrl: 'https://www.youtube-nocookie.com/embed/10OWIMlVvq0?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Illustrator, Animator, Gaze Tracking Programmer, Composer, Sound Designer',
        stack: 'Animate, Photoshop, Unity, Ableton Live, C#, OpenCV, Python',
        overview: 'Dead West is a short animation with a focus on building atmosphere and visual storytelling. The project also features a computer vision gazed control system that I developed, to allow the user to control their viewing angle with their head',
        contributors: 'Carson Strout',
        repositoryUrl: '',
        tryUrl: ''
    },
    'project7': {
        title: 'Plus Music Graphic Video',
        subtitle: 'Animated Graphics | Summer 2023',
        videoUrl: 'https://www.youtube-nocookie.com/embed/4CqYB9phfDY?modestbranding=1&rel=0&iv_load_policy=3&controls=1',
        roles: 'Animator, Graphic Designer',
        stack: 'After Effects, Photoshop',
        overview: "Animated a graphic video demonstrating PlusMusic's use of AI in their platform. Corresponded with PlusMusic CEO to nail down design requirements over multiple itterations.",
        contributors: 'Individual',
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
            showFeaturedProjectDetails(projectId);
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