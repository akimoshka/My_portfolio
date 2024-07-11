import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

interface Project {
  title: string;
  description: string;
  images: string[];
  thumbnail: string;
  alt: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Telegram Bot',
      description:
        'A telegram bot made for accessing information about companies and current currencies exchange rates.',
      images: [`/stuff/project_1_1.png`, `/stuff/project_1_2.png`],
      thumbnail: `/stuff/koin.jpg`,
      alt: 'Project 1',
    },
    {
      title: 'Future Project',
      description: 'Space for future projects.',
      images: [],
      thumbnail: `/stuff/TBD.jpg`,
      alt: 'Project 2',
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
          <meta name="description" content="Projects that I have done" />
        </Head>
        <div className="intro_projects">
          <ul className="project-list">
            {projects.map((project, index) => (
              <li
                key={index}
                className="project-item"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.thumbnail} alt={project.alt} />
                <p>{project.title}</p>
              </li>
            ))}
          </ul>
          {selectedProject && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </span>
                <h1>{selectedProject.title}</h1>
                <p>{selectedProject.description}</p>
                <div id="modal-images">
                  {selectedProject.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`Project ${idx + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Projects;
