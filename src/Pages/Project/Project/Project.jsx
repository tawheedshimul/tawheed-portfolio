// ProjectShowcase.js

import React, { useState } from 'react';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },{
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc vel risus convallis, nec eleifend quam consequat.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
];

const ProjectShowcase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className=" h-[768px] mx-auto">
      <h1 className="text-4xl -mt-[60px] pt-48 font-bold text-center h-64 bg-gray-800 bg-opacity-50 text-white" style={{backgroundImage: `url('https://i.ibb.co/yf3Vbdn/projectbanner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <span className='border-b-2 p-2 px-7 rounded bg-gray-900 bg-opacity-90'>Project Showcase</span>
</h1>

      <div className="flex px-2 overflow-x-auto gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white flex-shrink-0 rounded-lg shadow-lg w-72">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-center">
                <button onClick={() => openModal(project.id)} className="text-blue-500 hover:underline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && selectedProject && (
        <Modal onClose={closeModal}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex justify-center space-x-4">
              <a href={selectedProject.githubUrl} className="text-blue-500 hover:underline">GitHub</a>
              <a href={selectedProject.liveDemoUrl} className="text-green-500 hover:underline">Live Demo</a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectShowcase;
