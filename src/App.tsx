import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Skills = React.lazy(() => import('./pages/Skills/Skills'));
const Resume = React.lazy(() => import('./pages/Resume/Resume'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header />
          <main id="main-content" className="main-content">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;