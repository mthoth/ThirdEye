import React, {useRef} from "react";
import Reveal from "./reveal";


function FAQcontent() {

const what = useRef(null);
const how = useRef(null);
const commissions = useRef(null);
const freelance = useRef(null);
const getpaid = useRef(null);
  
  const yoffest = -63;

  const getoffset = (el) =>
  {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY + yoffest;
  };


  const Scrollwhat = () => setTimeout(function() {window.scrollTo({top: getoffset(what.current), behavior: "smooth"});}, 100); 
  const Scrollhow = () => setTimeout(function() {window.scrollTo({top: getoffset(how.current), behavior: "smooth"});}, 100); 
  const Scrollcoms = () => setTimeout(function() {window.scrollTo({top: getoffset(commissions.current), behavior: "smooth"});}, 100); 
  const Scrollfree = () => setTimeout(function() {window.scrollTo({top: getoffset(freelance.current), behavior: "smooth"});}, 100); 
  const Scrollpaid = () => setTimeout(function() {window.scrollTo({top: getoffset(getpaid.current), behavior: "smooth"});}, 100); 





  


    return (
        <>
            <Reveal />
            <div className="flex">
                <button onClick={Scrollwhat} className="regnav bgred">The Whats</button>
                <button onClick={Scrollhow} className="regnav bgorange">The Hows</button>
                <button onClick={Scrollcoms} className="regnav bggreen">Commissions</button>
                <button onClick={Scrollfree} className="regnav bgblue">Freelancing</button>
                <button onClick={Scrollpaid} className="regnav bgpurple">Getting Paid</button>
            </div>

            <p>If your question isn't here or you need more specific help, feel free to ask for help on our Discord server or Twitter Account!</p>

            <h2 className="content-subtitle" ref={what} id="what">The Whats</h2>
            <div>
                <button className="question bgred">Whats a commission? How Does it work?</button>
                <div className="hidden">
                    <p>A "commision” work is a <b>personalised</b> <b><i>paid</i></b> <b>artwork</b>. Lets say you sew, paint and/or animate. A potential client wants a custom piece. Depending on the time it takes and the complexity of what they want, you decide if you want to do it and for what price.</p>
                    <p>On the internet, it's very common for artists to have "Commission charts” on their websites and social media profiles. In these, they display rates for fixed types of work they're offering (ex.: a linework takes less time than a full color painting so it's usually at a lower price). These rates are supposed to be guidance. Sometimes a client wants something very complex and for that, we have to inform them the rates will be higher.</p>
                    <p>It's important to remark that "commission” refers to a personalised, paid artwork <b>for personal use only</b>.  If the client wants to use your art for their Twitch, their picture book, merch or any other commercial use, that's a different (higher) rate and a different conversation (that we cover below)!</p>
                </div>
            </div>
            <div>
                <button className="question bgred">What's contract? When do I make it and how do I do it?</button>
                <div className="hidden">
                    <p>A contract is a document that both you and the client sign. It's basically a written agreement that has legal validity in which you'll state what you'll do, what it's for, how much you'll be paid and the deadlines you agreed on.</p>
                    <p>The ideal is that every time you work with a client, you both sign a contract. Yes, verbal agreements are <i>usually</i> fine but you need to be safe. How do you know you'll be paid as accorded? How does your client know you won't run away with the money? How do you jot down how and for what your work will be used?</p>
                    <p>We left some info in how to draft a contract on our resource list! It's valid for illustration work, for animations, for portraits. Anything, really. You don't need a lawyer to write one! It's just the written version of any verbal agreements and terms & conditions.</p>
                </div>
            </div>
            <div>
                <button className="question bgred">What's a freelance artist?</button>
                <div className="hidden">
                    <p>A freelance artist is an artist who is self-employed and exchanges art with clients and companies for a fee. This usually requires you to manage your own schedule, contract, legal and tax situation, etc.</p>
                </div>
            </div>
            <div>
                <button className="question bgred">What's a Portfolio?</button>
                <div className="hidden">
                    <p>A Portfolio is a selection of work you show to prospective clients, employers and schools. </p>
                    <p>The idea is that you fill your Portfolio with the work you want to be hired for. So, if you want to work in Storyboards for the animation industry, your Portfolio needs to have several storyboards to show you know the job, you can do it and how you do it. </p>
                    <p>The consensus is that the Portfolio should be hosted in an image based website, not text based social media (So, like, Behance, ArtStation or the artist's own website instead of Twitter or Facebook). </p>
                    <p>There's several advice on how to build a Portfolio, you can read about it on our resource list. We encourage you to research and build based off your industry!</p>
                </div>
            </div>
            <div>
                <button className="question bgred">What's WFH? (Work for Hire)</button>
                <div className="hidden">
                    <p>WFH is a type of contract in which the clients own full rights for what the artist creates for them in the duration of my contract with them unless otherwise specified. They own all the artwork and can do whatever they want. This requires a higher fee than you'd do for licensing your work or for a personal commission.  </p>
                    <p>If you do personal commissions, you must specify in the contract that the client can't use your art for any commercial use. They can just display it, print it for personal use, for example. </p>
                    <p>If you do commercial work for the client and they ask for a design they'll use for a limited run of shirts, you are licensing them your work for that specific amount of shirts (and charging accordingly). If the client wants to use it for pins, for example, that requires a new license they must pay for. </p>
                    <p>In WFH work, they can change course on what they do with the artwork and the artist won't ever be compensated for it.</p>
                </div>
            </div>
            <div>
                <button className="question bgred">What's in-house?</button>
                <div className="hidden">
                    <p>It's when you're employed by a studio/company for a fixed monthly salary and a fixed amount of time (example: 8 hours, from Mon to Fri). Your salary and benefits (paid time off, insurance, etc) are negotiated beforehand with your employer.</p>
                </div>
            </div>


            <h2 className="content-subtitle" ref={how} id="how">The Hows</h2>
            <div>
                <button className="question bgorange">How should I price prints? Do I print them locally and ship them or use a service like Redbubble, INPRNT, etc?</button>
                <div className="hidden">
                    <p>You must consider many factors: the cost of your labor, the cost of the materials to print, the cost of shipping. If you're willing to set up your own shop and if it's convenient for you.</p>
                    <p>Many times printing it locally and selling a print for, let's say, 35 USD, let up keep 30USD as profit. But then the shipping it's 14 USD and we lose lose lose against using a service that gives us the same money with just uploading the pictures to their website. It depends! It depends!</p>
                    <p>Remember sites like Redbubble, INPRNT, TeePublic or Society6 keep a considerable percentage of the sales. It's not the same for every platform, though! Redbubble, for example, keeps 80% while INPRNT keeps 50%!</p>
                </div>
            </div>
            <div>
                <button className="question bgorange">How much should I price for social media design work?</button>
                <div className="hidden">
                    <p>First off, this depends on their budget! The range for social media services bundles is broad (between 100USD and 2000USD per month!). The important thing is to set the budget, the basics they want, whether they want a regular monthly amount of work or a one-off. It depends on how much work they expect from you. It's not the same to pay 800USD for simple, weekly art than to pay 800USD for biweekly complex pieces.</p>
                    <p>If they prefer a previous contract, they might only have a set budget. Consider whether the work they want matches with the rates for that kind of work and negotiate accordingly (less work for the same budget, for example). See what their minimum requirements are, see if you can offer them more in the case they have more budget available and negotiate!</p>
                </div>
            </div>
            <div>
                <button className="question bgorange">How much should I price my work if a client doesn't tell me their budget?</button>
                <div className="hidden">
                    <p>It's usually recommended than, when a new client asks for our rates, we ask them their budget. This allows us to negotiate. In many cases, though, the client asks for the rates right away and refuses to tell us their budget.</p>
                    <p>When this scenario happens, to avoid blatantly telling our hourly rate and underselling ourselves, we must consider many things:</p>
                    <ul>
                        <li>We can ask them for a more detailed description of the project and the client instead. If they still insist on knowing your rates first, don't give them one number. give them a range for the whole project. and overshoot the upper limit.</li>
                        <li>Who is hiring you? Is it a company? A person? Young, old? An artist, influencer? All of that can give you an idea of their budget and how much you should say. But, very important, if you get asked for an intro for a Twitch animation, don't charge less because the person has two followers. Charge from the market rate onwards.</li>
                        <li>Consider if the work is commercial - and price around the value if it is!</li>
                        <li>When you know the kind of project asked, check out resources and ask around.</li>
                    </ul>
                    <p>When you know the kind of project asked, check out resources and ask around.</p>
                </div>
            </div>

            <h2 className="content-subtitle" ref={commissions} id="commissions">Commissions</h2>
            <div>
                <button className="question bggreen">How much should I price my commission?</button>
                <div className="hidden">
                    <p>Ah, yes, the neverending question. You're in the international/1st world market. You should be getting at the very very very least at least 15-20 USD per hour of work. And the cost of that per-hour fee should get higher as time passes.</p>
                    <p>So, let's say, a full body full color illustration with a simple background? It shouldn't be lower than 80 USD (if it takes you 4 hours!). Keep in mind to add processing fees of your chosen payment method!</p>
                    <p>That said, this is a really effing hard question so if you need to get more specific, check out our resource list and feel free to pop in to #pricing-list channel on the collective to ask some peers!</p>
                </div>
            </div>
            <div>
                <button className="question bggreen">But I'm not skilled enough! That 's too much!</button>
                <div className="hidden">
                    <p>There's something called "minimum wage” and "industry standard”. Your work, even though you think isn't on par with your peers, has taken an amount of time and skill to learn. And the investment of your time and execution of your skill for another's benefit is labor. Therefore, it should be properly compensated.</p>
                    <p>The numbers said here are minimum wage and a standard minimum pay per hour of a work like ours. Your time is worth this much. See: resources on this down below.</p>

                    <p>If they prefer a previous contract, they might only have a set budget. Consider whether the work they want matches with the rates for that kind of work and negotiate accordingly (less work for the same budget, for example). See what their minimum requirements are, see if you can offer them more in the case they have more budget available and negotiate!</p>
                </div>
            </div>
            <div>
                <button className="question bggreen">But in my country this means X amount of money, which is way more than I expect for doing the work locally!</button>
                <div className="hidden">
                    <p>I get it! I absolutely get it. But when doing work in USD/EUR, you don't have to convert from your currency to theirs. There's a specific local standard in our local currencies and there's a different standard in international markets. Therefore, when dealing with first world clients, you have to think in first world prices. This is your labor for their benefit.</p>
                    <p>Since many of us also keep clients locally, I recommend having two different price charts: one for local prices (in our local currency) and one for international prices (in USD/EUR).</p>
                </div>
            </div>
            <div>
                <button className="question bggreen">But I keep this as my hobby! And my client says they can get someone to do this for 10 USD!</button>
                <div className="hidden">
                    <p>I don't want to say your client is a dick but I can say they're not properly valuing your time. Yes, many people do excellent work for very little. But it's not sustainable long term.</p>
                    <p>Let's say you take six hours on commission work that you'll be paid… 30 USD for. By our numbers (20 p/h), you should be getting at least 120 USD. To get that money with a 30USD rate, you'd have to work twenty four hours instead of six. It's a big difference. We're creatives, after a certain number of hours, we get burnout or pains. Long term, you'll have to work four times as hard to get what you minimally deserve.</p>
                    <p>If after informing your client your wages, they say "I can get someone to do this for pennies”, well, that's someone I wouldn't like to work for anyway. Were they even thinking of paying you?</p>
                    <p>That's why we have contracts, actually, to set facts in stone and to protect both artist and client!</p>
                </div>
            </div>
            
            

            <h2 className="content-subtitle" ref={freelance} id="freelancing">Freelancing</h2>
            <div>
                <button className="question bgblue">A client said they want to sell my art in tshirts/prints/ads/ want commercial rights of my work. What does that mean for me? What do I do?</button>
                <div className="hidden">
                    <p>This is when we say everything said before applied solely for personal commissions, that is, commission work in which the client won't profit off your work. If the client wants to use your work commercially, this means your work will be profited off. Therefore, when you charge them, you charge them covering that profit.</p>

                    <span>You have two options:</span>
                    <ul><li>YOU SELL THE COMMERCIAL RIGHTS OF THE ARTWORK TO THEM IN ONE PAYMENT.</li></ul>
                    <p>This means, you sell them your copyright to that work, your intellectual property. They can profit off your artwork once and forever. Your rates will have to prevent this profit. For this - depending on the client - you have to charge them between 3x - 5x times the amount you'd charge for a personal commission. Of course, you won't charge a small business the same amount as a company like Coca Cola - but it's still expensive. You can't charge them less than 3 times what you'd charge for a personal commission.</p>

                    <ul><li>YOU CHARGE THEM FOR THE WORK AND THEY HAVE TO PAY YOU A PORTION OF THE EARNINGS</li></ul>
                    <p>This means you agree that you charge them an initial amount for the work and that you receive a portion of the profit they make off the sales. Keep in mind this is trickier, don't tie yourself to agreements in which you'll have to chase down the client every month for your share of the cake.</p>
                    <p>The option you choose depends on the client you have. Needless to say, commercial work should always have a contract in-between.</p>
                </div>
            </div>
            <div>
                <button className="question bgblue">What if I've priced my work properly but don't get any jobs? I need to keep earning money to survive and the low payment sustains it!</button>
                <div className="hidden">
                    <p>It's a valid question! This involves a lot of nuances that come up personally (the quality of the art, the level of networking/audience, whether you have another job/are ready to embark in freelance art only or share the time with something that pays the bills...). It's okay and normal to start with a day job and freelance art on the side. The artist still needs to eat until they can live off their art. The work and time invested in cheap commissions can instead be invested on excelling your craft and/or making portfolio pieces to get better jobs and/or just resting.</p>
                    <p>Pricing your art properly is beneficial not only to your colleagues (so it isn't a race to the bottom) but also to your time, physical and mental health.</p>
                </div>
            </div>
            <div>
                <button className="question bgblue">Should I work with sites like Fiverr/Upwork/Freelancer.com? How do they work? Are they sustainable?</button>
                <div className="hidden">
                    <p>Let's make this clear first and foremost: bidding sites like Fiverr, Upwork, Freelancer.com and others have developed into races to the bottom. Many employers come for very low, exploitative rates and many people (out of ignorance, need or insecurity) do provide that. A bidding site like Upwork where a client posts their project and artists explain their rates isn't the problem, ****the problem is the expectation that you must get the job and - for that - you must offer the lowest rate possible. This is not sustainable, it's harmful to other artists, it's harmful for ourselves, our economy and mental and physical health as workers.</p>
                    <p><b>Clients from sites like Fiverr and Upwork prey on the ignorance many artists have over the wages and standards of the industry, most of whom are from the Global South.</b> So, basically, we end up being paid like 3rd world for work in the 1st world and many times, the wage isn't even fair for the amount of work and our own living standard.</p>
                    <span><b>Most freelance artists recommend against bidding sites since:</b></span>
                    <ul>
                        <li>They take a big chunk of the income (around 20% plus payment service fees)</li>
                        <li>You must be on the platform constantly to get jobs (and the platform preys on that with "premium” plans to get "higher paying jobs”)</li>
                        <li>The platform doesn't protect you if the client doesn't pay or there's a breach of contract, resulting in income loss or having to chase down a client.</li>
                        <li>It solves the need for marketing only short term because you receive clients but many times they can't (or won't) come back or recommend you.</li>
                        <li>Clients seek for the faster, cheapest, most quality work. This is something that we can't achieve.</li>
                        <li>The artists consider the time spent on the site bidding or working for clients meant losing on time to improve portfolio, network, learn skills, etc.</li>
                        <li>These sites - by their Guidelines - allow clients to directly take the copyright for your work.</li>
                    </ul>
                    <p><b>If you want to try them, though, we recommend you charge way above what you'd normally charge and above the prices you see on the site.</b></p>
                    <p>Cover both the money using the site makes you lose and the loss of copyright and the time and effort spent bidding. Charge normal industry prices or more. Don't engage with the race to the bottom. If on Fiverr most people want a picture book for 200 USD, a price unlivable and unsustainable for half a year's work, charge and offer the real price: from 3000 USD onwards. You can check out industry standards and prices on sites like <a href="https://litebox.info/" className="blue">Litebox</a>.</p>
                </div>
            </div>
            <div>
                <button className="question bgblue">A client/company asked me to do a test to get selected for a job! Do I do it?</button>
                <div className="hidden">
                    <p>Is it paid? Then great, good luck! They said it must be free of charge because it's "just a test and they need to see if your skills match up with their vision”? Nope. They either must pay you for the time and effort you'll put on that test or they must conform with the portfolio, since that's what it's for.</p>
                    <p>Your portfolio shows your skills. If they need any testing period or concept work before you commit to the whole project, that has a fee. It's your time, your work and it's worth it.</p>
                </div>
            </div>

            <h2 className="content-subtitle" ref={getpaid} id="getpaid">Getting Paid</h2>
            <span><b>Here are some payment services when you're from the Global South:</b></span>
            <p>There are a multitude of payment services to use. Here we compile and compare all the experiences with the three main services discussed in the Collective: <b>Paypal</b>, <b>Payoneer</b> and <b>Wise</b> (formerly Transferwise).<br></br>
            We encourage doing your own research and, if you need more specific help, pop by our discord!</p>
            <div>
                <button className="question bgpurple">PAYPAL</button>
                <div className="hidden">
                  <p>We all know Paypal! Good ol' Paypal! This service is a digital wallet that allows users to pay each other with their credit/debit cards and with their Paypal balance. Users have the option of holding a personal account and a business account. With both you can send invoices although with a business account, you can choose to not have your full name displayed. </p>
                  <span style={{color: "green"}}><b>PROS</b></span>
                  <ul>
                      <li>You can save in USD and transfer your balance to your bank account</li>
                      <li>Everyone knows it and has a Paypal account. Most clients trust it.</li>
                      <li>Connected to services like Ko-fi, Gumroad, Patreon, INPRINT, Redbubble… basically, most platforms for artists and e-shops will require a Paypal account. If you have those services, you'll get paid via Paypal</li>
                      <li>You can pay for services with the platform</li>
                      <li>You can send invoices. In these, clients have the possibility to tip on top of their bill.</li>
                      <li>Payments get deposited instantly.</li>
                  </ul>

                  <span style={{color: "crimson"}}><b>CONS</b></span>
                  <ul>
                      <li>The recipient is charged for the transfer fees when they receive money via Paypal. The fees vary from country to country and the percentage isn't transparent (Around 5% but it can vary). You can read about the fees from the service itself <a href="https://www.paypal.com/us/smarthelp/article/what-are-the-cross-border-fees-when-selling-international-faq2927" className="purple">here</a> and <a href="https://www.paypal.com/us/webapps/mpp/paypal-fees" className="purple">here</a></li>
                      <li>Transference to local bank accounts is subjected to limitations and fees (Around 3% but it can vary). (specially if you're not in the US, like most Global South artists)</li>
                      <li>Receiving money from Ko-fi and other services isn't exempt from usual fees.</li>
                      <li>Many artists have reported having their accounts (and balance) suddenly suspended/freezed.</li>
                  </ul>
                </div>
            </div>
            <div>
                <button className="question bgpurple">WISE</button>
                <div className="hidden">
                  <p>Transferwise (now Wise) works by connecting with local banks all over the world. So lets say you're from Morocco and someone wants to pay you from Brazil and they have brazilian reais. Transferwise has both an account on Brazil in reais and an account on Morocco in your local currency. So your client from Brazil sends the amount to the Transferwise account in Brazil and the Transferwise account in Morocco sends the equivalent amount in your currency from their bank in Morocco.</p>
                  <p>Apart from that, Transferwise also has the option of a borderless account. This means Transferwise creates a USD/CAD/EUR bank account in your name. For example: you open transferwise, open your local accounts, then open a borderless account in a USD currency, then click "what are my USD bank details" and share that directly with the client. This way, the funds stay in the digital bank in USD until you want to transfer them to your bank. The borderless account also allows you to order a debit card that's linked to it (depending on your location and citizenship).</p>
                  <p>The great thing about this is, even if your client is not familiar with Wise, you can just send them your borderless account details appropriate to the currency of the client and they will transfer it the conventional way from their own local bank.</p>
                  <span style={{color: "green"}}><b>PROS</b></span>
                  <ul>
                      <li>Lower fees than Payoneer or Western Union. Fees depend on the country. Anyway, you can compare exchange rates before making a transaction on their <a href="https://wise.com/gb/compare/" className="purple">website</a></li>
                      <li>Quicker waiting times than direct wire transfer. Most of the time the transfers are instant but a delay of a day is possible. It's updated in real time.</li>
                      <li>Borderless account allows you to save in USD.</li>
                  </ul>

                  <span style={{color: "crimson"}}><b>CONS</b></span>
                  <ul>
                      <li>Debit card can't be acquired by everyone. Philippines residents, for example, can't, although they can use the borderless account.</li>
                      <li>Not very well known in Europe/US.</li>
                  </ul>
                  <p>Extra info:  “Pay Your Offshore Team Quickly and Conveniently” by Design off the Boat <a href="https://link.medium.com/UlSPXRfmpbb" className="purple">https://link.medium.com/UlSPXRfmpbb</a></p>
                </div>
            </div>
            <div>
                <button className="question bgpurple">PAYONEER</button>
                <div className="hidden">
                    <p>Payoneer is a digital wallet and also creates a bank account in USD, EURO and GBP so clients can directly deposit money. You need to provide your documentation and verify your identity while signing up so you can access its features.</p>
                    <p>With a Payoneer account you can make many things: receive/transfer money (as long as it is in the currencies mentioned), invoice payments to clients and order a pre-paid Mastercard debit card connected to your account. With this debit card, you can both make purchases and extract cash from ATMs in many countries.</p>
                    <span style={{color: "green"}}><b>PROS</b></span>
                    <ul>
                        <li>You can emit invoices to clients and send them a link with which they can pay in their preferred payment service (credit and debit cards, mostly)</li>
                        <li>You can save in USD and extract it from an ATM although this isn't possible in every country</li>
                        <li>The platform lets you open a bank account on several currencies. Any money sent there will be deposited on your Payonner balance.</li>
                        <li>You can send money from Payoneer to your local bank.</li>
                        <li>No fees within Payoneer users. If not, it's between 1%-3% per invoice and it's always charged to the party sending the money. That said, the only maintenance fee you have to pay for use is if you order the card and it's 30 USD annually. You can see all fees <a href="https://www.payoneer.com/in/about/fees/" className="purple">here</a></li>
                        <li>Pretty easy to use and invoice to clients</li>
                    </ul>
                    <span style={{color: "crimson"}}><b>CONS</b></span>
                    <ul>
                        <li>Payments take their time to be deposited on your account. It's - at most - 5 business days but you can see the updates in real time on your account.</li>
                        <li>Sometimes client's banks reject/give trouble but this isn't often</li>
                        <li>Only companies can make a direct bank transfer to the bank account Payoneer gives you. Personal clients must pay with card or Payoneer balance</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FAQcontent;