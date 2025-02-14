export default function Home() {
  return (
    <div className="relative container col-12 mt-6">
      <h1 className="col-12">
        Welcome to the Homepage
      </h1>
      <div className="sub-grid col-12">
        <div className={"bg-green col-3 col-md-2 col-lg-4"}>
          takes 4 cols on large desktop, 2 on tablet and 3 on mobile
        </div>
        <div className={"bg-yellow col-1 col-md-3 col-lg-3"}>
          takes 3 cols on large desktop, 3 on tablet and 1 on mobile
        </div>
        <div className={"bg-blue col-4 col-md-6 col-lg-5"}>
          takes 5 cols on large desktop, 6 on tablet and 4 on mobile
        </div>
      </div>
      <div className="col-8 col-md-6">
        <h2>Content</h2>
        <span>This boilerplate has:</span>
        <ul style={{ margin: "0 0 0 1.5rem" }}>
          <li>nextJS</li>
          <li>custom grid system made from scratch, customizable via css variables</li>
          <li>basic custom routing with (framer) motion (no exit anim yet...)</li>
        </ul>
      </div>
      <div className="col-4 col-md-2">
        <h2>Test</h2>
        <ul style={{ margin: "0 0 0 1.5rem" }}>
          <li>{`Press "g" to toggle the grid`}</li>
          <li>{`Press "s" to toggle the screen info`}</li>
          <li>{`Resize the browser window to see the columns change`}</li>
        </ul>
      </div>
    </div>
  );
}
