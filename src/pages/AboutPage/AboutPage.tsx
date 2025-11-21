const AboutPage = () => {
  return (
    <div style={{ paddingTop: '30px', paddingBottom: '50px', maxWidth: '720px' }}>
      <div className="container">
        <h1 style={{ marginBottom: '30px' }}>About This Project</h1>
        <p style={{ marginBottom: '20px' }}>
          This application is a modern rewrite of an old Image Finder project. The goal of the
          rewrite is to demonstrate clean architecture, modular feature-based structure, and
          TypeScript-first development using Vite and React 19.
        </p>
        <p style={{ marginBottom: '20px' }}>
          The project follows a lightweight feature-sliced structure where each feature owns its
          domain types, API layer, model logic, and UI components. Shared UI elements like buttons,
          loaders, and modals are extracted into a reusable design system.
        </p>
        <p>
          The image search functionality is powered by the Pixabay API. The application demonstrates
          proper state management, asynchronous data flows, reusable domain models, and side-effect
          isolation in React hooks.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
