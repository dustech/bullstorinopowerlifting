import React from 'react';

const FbIFrame = () => {
  return (
    <div>
      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FPOWERLIFTINGBULLSTORINO%2F&width=200&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" height="80" width="200" scrolling="no" frameBorder="0" allow="encrypted-media" />
    </div>

  );
};

export default FbIFrame;

//<iframe src={this.props.src} height={this.props.height} width={this.props.width}/>


//const iframe = '<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FPOWERLIFTINGBULLSTORINO%2F&width=200&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId"   width="200" height="80" style="border:none;overflow:hidden" scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>';


