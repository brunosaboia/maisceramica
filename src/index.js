import React from 'react';
import ReactDOM from 'react-dom';
import images from './images';

import './styles.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {images.map(image => (
        <FadeInSection key={image}>
          <div className="box">
            <img className="box-img" alt="" src={image} />
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
