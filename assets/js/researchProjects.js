const researchProjectData = {
    'project1': {
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
    'project2': {
        title: 'Dynamic Projection in Immersive Spaces',
        subtitle: 'Rendering Technique Research | On-Going',
        videoUrl: '',
        roles: 'Author, Developer',
        stack: 'Unreal Engine, OpenCV, Open Pose, ONNX Runtime, Python, C++, UE Blueprints',
        overview: "This project explores how to effectively create immersive spaces using pose estimation to control a virtual camera's projection matrix in Unreal Engine 5. The focus is on achieving this immersive effect in different use cases, such as immersive caves (low-light, wall-size screens) and traditional displays (computer monitors, TVs). Two pose estimation systems will be evaluated—one using an Azure Kinect depth sensor and the other using camera-based neural network pose estimation (OpenPose)—to compare their effectiveness in various environments.",
        contributors: 'Individual',
        pdf: '',
        repositoryUrl: '',
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.research-project-container');

    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Remove 'selected' class from all projects
            projects.forEach(p => p.classList.remove('selected'));
            // Add 'selected' class to clicked project
            this.classList.add('selected');
            // Get project ID
            const projectId = this.getAttribute('data-project-id');
            showResearchProjectDetails(projectId);
        });
    });

        // Event listeners for buttons
        document.getElementById('research-project-repo-button').addEventListener('click', function () {
            const url = this.dataset.url;
            if (url) window.open(url, '_blank');
        });
});

function showResearchProjectDetails(projectId) {
    const projectInfo = researchProjectData[projectId];

    if (projectInfo) {
        document.querySelector('.research-project-details-title').textContent = projectInfo.title;
        document.querySelector('.research-project-details-subtitle').textContent = projectInfo.subtitle;
        document.querySelector('.research-project-details-video').src = projectInfo.videoUrl;
        document.querySelector('.research-project-details-role').textContent = projectInfo.roles;
        document.querySelector('.research-project-details-stack').textContent = projectInfo.stack;
        document.querySelector('.research-project-details-overview').textContent = projectInfo.overview;
        document.querySelector('.research-project-details-contributors').textContent = projectInfo.contributors;

        const repoButton = document.getElementById('research-project-repo-button');
        const tryButton = document.getElementById('research-project-try-button');

        if (projectInfo.repositoryUrl) {
            repoButton.dataset.url = projectInfo.repositoryUrl;
            repoButton.style.display = 'inline-block';
        } else {
            repoButton.style.display = 'none';
        }
    }
}