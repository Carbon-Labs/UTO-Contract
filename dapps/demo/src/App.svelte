<script>
	let token = 'CARB';
	let tokenName = 'CARBON Token';
	let contractAddress = 'zil1hau7z6rjltvjc95pphwj57umdpvv0d6kh2t8zk';
	let yourZilAddress = 'zil14gjgjmw3cf0vvzewshtux422zafhq89cq796cx';

	//import { Zilswap } from 'zilswap-sdk';
	//import {Zilliqa} from '@zilliqa-js/zilliqa';

	//const { BN, Long, bytes, units } = require('@zilliqa-js/util');
	//const { Zilliqa } = require('@zilliqa-js/zilliqa');

</script>

<h1>UTO for {token} - {tokenName}!</h1>
<h3>{contractAddress}</h3>
Your Zilliqa Address: <em>{yourZilAddress}</em>
<hr>
<h4>TO DO&hellip;</h4>
<ol>
	<li>Display CARBON Balance</li>
	<ol>
		<li>In wallet</li>
		<li>In Contract</li>
	</ol>
	<li>Display CARBON value</li>
	<li>Allow investing (depositing of CARBON)</li>
	<li>Allow investing of ZIL</li>
	<li>Allow withdrawal</li>
	<li>Allow paying of invoices</li>
	<li>Allow donations - <em>donations are 100% for beneficiary</em></li>
</ol>

<style>
:global(body) {
	background-color: black;
	background-image: radial-gradient(
		rgba(0, 150, 0, 0.75), black 120%
		);
		height: 100vh;
	color: white;
	font: 1.3rem Inconsolata, monospace;
	text-shadow: 0 0 5px #C8C8C8;
}
:global(body:after) {
	content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
    0deg,
    rgba(black, 0.15),
    rgba(black, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
}

h1 {
	margin-bottom: 0;
}

h3 {
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto;
  letter-spacing: .15em;
}

</style>
