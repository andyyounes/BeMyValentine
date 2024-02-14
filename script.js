function showProposal() {
    const proposal = document.getElementById('proposal');
    proposal.style.display = 'block';
    proposal.classList.add('pop');
    
  }
  
//   function handleYes() {
//     alert("Yay! Happy Valentine's Day!");
//     window.location.href = 'hesaidyes.html';
    
//   }
  
// function handleNo() {
//     noButtonClicks++;
//     document.querySelector('.button-no').style.marginLeft = `${noButtonClicks * 10}px`;
//     if (noButtonClicks >2 ) {
//         alert("Alright, here's a cute cat for you!");
//         window.location.href = 'bemy.html'; // Redirect to a cat page or replace with your desired URL
//     }
// }
let noButtonClicks = 0;

function handleYes() {
  alert("Yay! Happy Valentine's Day!");
  document.getElementById('catImage').style.display = 'block';
  window.location.href = 'hesaidyes.html';
}

function handleNo() {
  noButtonClicks++;
  if (noButtonClicks === 2) {
    alert("Are you sure? One more click and you'll see a cute cat!");
  }
//   const buttonNo = document.querySelector('.button-no');
//   const currentMargin = parseInt(getComputedStyle(buttonNo).marginLeft, 50) || 0;
//   const newMargin = currentMargin + 50;
  
//   buttonNo.style.marginLeft = `${newMargin}px`;


  else if (noButtonClicks === 3) {
    alert("Alright, here's a cute cat for you!");
    document.getElementById('catImage').style.display = 'block';
  }

  

}
