import { useRef } from 'react';
import DisplaySection from './components/DisplaySection';
import Nav from './components/Nav';
import SoundSection from './components/SoundSection';
import Jumbotron from './components/Jumbotron';
import WebgiViewer from './components/WebgiViewer';

function App() {
	const webgiViewerRef = useRef();
	const contentRef = useRef();

	const handlePreview = () => {
		webgiViewerRef.current.triggerPreview();
	};

	return (
		<div className='App'>
			<div ref={contentRef} id='content'>
				<Nav />
				<Jumbotron />
				<SoundSection />
				<DisplaySection triggerPreview={handlePreview} />
			</div>

			<WebgiViewer ref={webgiViewerRef} contentRef={contentRef} />
		</div>
	);
}

export default App;
