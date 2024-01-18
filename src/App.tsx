import hellkitty from './assets/hello.png'

function App() {
	return (
		<div className="">
			<div>
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img src={hellkitty} />
      </div>
		</div>
	);
}

export default App;
