import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PictureCard from "./components/pictureCard";
import TitleBar from "./components/titleBar";
import { Modal, Button } from "react-bootstrap";

function App() {
  const physicists = [
    {
      name: "Galileo Galilei",
      from: "1564",
      to: "1642",
      image: "./images/galileo-galilei.jpg",
      quotes: [
        `And yet it moves.`,
        `I give infinite thanks to God, who has been pleased to make me the first observer of marvelous things.`,
        `The Bible shows the way to go to heaven, not the way the heavens go.`,
        `Measure what is measurable, and make measurable what is not so.`,
        `Nature is relentless and unchangeable,
 and it is indifferent as to whether its hidden reasons and actions are understandable to man or not.`,
        `If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.`,
      ],
    },
    {
      name: "Isaac Newton",
      from: "1643",
      to: "1727",
      image: "./images/isaac-newton.jpg",
      quotes: [
        `Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.`,
        `Atheism is so senseless. When I look at the solar system, I see the earth at the right distance
 from the sun to receive the proper amounts of heat and light. This did not happen by chance.`,
        `All variety of created objects which represent order and life in the universe could happen only
 by the willful reasoning of its original Creator, whom I call the 'Lord God.'`,
        `If I have seen further than others, it is by standing upon the shoulders of giants.`,
        `I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing
 on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than
 ordinary, whilst the great ocean of truth lay all undiscovered before me.`,
        `I have explained the phenomena of the heavens and of our sea by the force of gravity,
 but I have not yet assigned a cause to gravity.`,
        `Are not rays of light very small bodies emitted from shining substances?`,
      ],
    },
    {
      name: "Joseph Louis Lagrange",
      from: "1736",
      to: "1813",
      image: "./images/joseph-louis-lagrange.jpg",
      quotes: [
        `It has cost them but a moment to cut off that head; but a hundred years will not be sufficient 
to produce another like it.`,
        `Newton was the greatest genius that ever existed, and the most fortunate, for we cannot find 
more than once a system of the world to establish.`,
        `I regarded as quite useless the reading of large treatises of pure analysis: too large a number
 of methods pass at once before the eyes. It is in the works of application that one must study them; 
 one judges their utility there and appraises the manner of making use of them.`,
        `As long as algebra and geometry have been separated, their progress have been slow and their 
uses limited; but when these two sciences have been united, they have lent each mutual forces, and have
marched together towards perfection.`,
      ],
    },
    {
      name: "William R. Hamilton",
      from: "1805",
      to: "1865",
      image: "./images/william-rowan-hamilton.png",
      quotes: [
        `To the Memory of Fourier
        Fourier! with solemn and profound delight,
        Joy born of awe, but kindling momently
        To an intense and thrilling ecstacy,
        I gaze upon thy glory and grow bright:
        As if irradiate with beholden light;
        As if the immortal that remains of thee
        Attuned me to thy spirit’s harmony,
        Breathing serene resolve and tranquil might.
        Revealed appear thy silent thoughts of youth,
        As if to consciousness, and all that view
        Prophetic, of the heritage of truth
        To thy majestic years of manhood due:
        Darkness and error fleeing far away,
        And the pure mind enthroned in perfect day.`,
        `I regard it as an inelegance, or imperfection, in quaternions, or rather in the state to which 
it has been hitherto unfolded, whenever it becomes or seems to become necessary to have recourse to … 
the resources of ordinary algebra. [x, y, z, etc.]`,
        `i^2 = j^2 = k^2 = ijk = - 1
        [This representation was devised on 16th Oct 1843, and which he carved into a stone of 
Brougham Bridge, over the Royal Canal, Dublin. It has since worn away.]`,
        `On earth there is nothing great but man… in man there is nothing great but mind.`,
      ],
    },
    {
      name: "Michael Faraday",
      from: "1791",
      to: "1867",
      image: "./images/michael-faraday.jpg",
      quotes: [
        `The book of nature which we have to read is written by the finger of God.`,
        `Why, sir, there is every probability that you will soon be able to tax it! 
Said to William Gladstone, the Chancellor of the Exchequer, when he asked about the 
practical worth of electricity.`,
        `There’s nothing quite as frightening as someone who knows they are right.`,
        `Although we know nothing of what an atom is, yet we cannot resist forming 
some idea of a small particle, which represents it to the mind ... there is an immensity 
of facts which justify us in believing that the atoms of matter are in some way endowed 
or associated with electrical powers, to which they owe their most striking qualities, 
and amongst them their mutual chemical affinity.`,
        `I cannot conceive curved lines of force without the conditions of a physical 
        existence in that intermediate space.`,
        `It is right that we should stand by and act on our principles; 
but not right to hold them in obstinate blindness, or retain them when proved to be erroneous.`,
        `Nothing is too wonderful to be true, if it be consistent with the laws of nature.`,
      ],
    },
    {
      name: "James Clark Maxwell",
      from: "1831",
      to: "1879",
      image: "./images/james-clark-maxwell.jpeg",
      quotes: [
        `I have looked into most philosophical systems and I have seen that none will work without God.`,
        `The true Logic for this world is the Calculus of Probabilities, which takes account of the 
magnitude of the probability.`,
        `The only laws of matter are those that our minds must fabricate and the only laws of mind
are fabricated for it by matter.`,
        `Science is incompetent to reason upon the creation of matter itself out of nothing. We have 
reached the utmost limit of our thinking faculties when we have admitted that because matter cannot 
be eternal and self-existent it must have been created.`,
        `Faraday is, and must always remain, the father of that enlarged science of electromagnetism.`,
        `The 2nd law of thermodynamics has the same degree of truth as the statement that if you throw 
a tumblerful of water into the sea, you cannot get the same tumblerful of water out again.`,
        `Heat may be generated and destroyed by certain processes, and this shows that heat is not a substance.
        `,
        `statistical laws are not necessarily used as a result of our ignorance. statistical laws can reflect
how things really are. there are matters that can only be treated statistically.`,
        `So many of the properties of matter, especially when in the gaseous form, can be deduced from the
hypothesis that their minute parts are in rapid motion, the velocity increasing with the temperature, that
the precise nature of this motion becomes a subject of rational curiosity. Daniel Bernoulli, John Herapath, 
Joule, Krönig, Clausius, &c., have shewn that the relations between pressure, temperature and density in 
a perfect gas can be explained by supposing the particles move with uniform velocity in straight lines, 
striking against the sides of the containing vessel and thus producing pressure. (1860)`,
        `By the study of Boltzmann I have been unable to understand him. He could not understand me
on account of my shortness, and his length was and is an equal stumbling block to me.`,
      ],
    },
    {
      name: "Sadi Carnot",
      from: "1796",
      to: "1832",
      image: "./images/sadi-carnot.jpeg",
      quotes: [
        `The production of motive power is then due… not to an actual consumption of caloric, 
but to its transportation from a warm body to a cold body… to its re-establishment of equilibrium…`,
        `The maximum of motive power resulting from the employment of steam is also the maximum of 
motive power realizable by any means whatever.`,
        `To take away to-day from England her steam-engines would be to take away at the same time 
her coal and iron. It would be to dry up all her sources of wealth, to ruin all on which her prosperity 
depends, in short, to annihilate that colossal power.`,
      ],
    },
    {
      name: "Rudolf Clausius",
      from: "1822",
      to: "1888",
      image: "./images/rudolf-clausius.jpg",
      quotes: [
        `The total energy of the universe is constant; the total entropy is continually increasing.`,
        `Heat can never pass from a colder to a warmer body without some other change, 
connected therewith, occurring at the same time.`,
        `The entropy of the universe tends to a maximum.`,
      ],
    },
    {
      name: "Lord Kelvin",
      from: "1827",
      to: "1907",
      image: "./images/lord-kelvin.jpg",
      quotes: [
        `If you study science deep enough and long enough, it will force you to believe in God.`,
        `Radio has no future." "X-rays are clearly a hoax". "The aeroplane is scientifically impossible.`,
        `In science there is only physics; all the rest is stamp collecting.`,
        `When you can measure what you are speaking about, and express it in numbers, you know something about it.`,
        `Overwhelmingly strong proofs of intelligent and benevolent design lie around us... 
the atheistic idea is so nonsensical that I cannot put it into words.`,
        `Suppose that you could mark the molecules in a glass of water; then pour the contents of the glass 
into the ocean and stir the latter throughly so as to distribute the marked molecules uniformly throughout 
the seven seas; if then you took a glass of water anywhere out of the ocean, you would find in it about a 
hundred of your marked molecules.`,
        `Although mechanical energy is indestructible, there is a universal tendency to its dissipation, 
which produces throughout the system a gradual augmentation and diffusion of heat, cessation of motion 
and exhaustion of the potential energy of the material Universe`,
        `Fourier's theorem is not only one of the most beautiful results of modern analysis, 
but it may be said to furnish an indispensable instrument in the treatment of nearly every recondite 
question in modern physics.`,
        `There is nothing new to be discovered in physics now. All that remains is more and more precise 
measurement.`,
      ],
    },
    {
      name: "Ludwig Boltzmann",
      from: "1844",
      to: "1906",
      image: "./images/ludwig-boltzmann.jpeg",
      quotes: [
        `Since in the differential equations of mechanics themselves there is absolutely nothing analogous 
to the second law of thermodynamics the latter can be mechanically represented only by means of assumptions 
regarding initial conditions.`,
        `Since a given system can never of its own accord go over into another equally probable state 
but into a more probable one, it is likewise impossible to construct a system of bodies that after traversing 
various states returns periodically to its original state, that is a perpetual motion machine.`,
        `Mathematics and music! the most glaring possible opposites of human thought! and yet connected, 
mutually sustained! It is as if they would demonstrate the hidden consensus of all the actions of our mind, 
which in the revelations of genius makes us forefeel unconscious utterances of a mysteriously active 
intelligence.`,
      ],
    },
    {
      name: "Josiah Willard Gibbs",
      from: "1839",
      to: "1903",
      image: "./images/josiah-willard-gibbs.jpg",
      quotes: [
        `A mathematician may say anything he pleases, but a physicist must be at least partially sane.`,
        `One of the principal objects of theoretical research in my department of knowledge is to find 
the point of view from which the subject appears in its greatest simplicity.`,
        `The laws of thermodynamics, as empirically determined, express the approximate and probable 
behavior of systems of a great number of particles, or, more precisely, they express the laws of mechanics 
for such systems as they appear to beings who have not the fineness of perception to enable them to 
appreciate quantities of the order of magnitude of those which relate to single particles, and who 
cannot repeat their experiments often enough to obtain any but the most probable results.`,
        `We avoid the gravest difficulties when, giving up the attempt to frame hypotheses concerning 
the constitution of matter, we pursue statistical inquiries as a branch of rational mechanics.`,
      ],
    },
    {
      name: "Hendrik Lorentz",
      from: "1853",
      to: "1928",
      image: "./images/hendrik-lorentz.jpg",
      quotes: [
        `I cannot but regard the ether, which can be the seat of an electromagnetic field with its energy 
and its vibrations, as endowed with a certain degree of substantiality, however different it may be from 
all ordinary matter.`,
        `Let there be in every material particle several material points charged with electricity, 
of which, however, only one be movable, and have the charge e and the mass μ.`,
        `I ndeed, one of the most important of our fundamental assumptions must be that the ether 
not only occupies all space between molecules, atoms, or electrons, but that it pervades all these particles. 
We shall add the hypothesis that, though the particles may move, the ether always remains at rest.`,
      ],
    },
    {
      name: "Max Planck",
      from: "1858",
      to: "1947",
      image: "./images/max-planck.gif",
      quotes: [
        `All matter originates and exists only by virtue of a force... We must assume behind this force 
the existence of a conscious and intelligent Mind. This Mind is the matrix of all matter.`,
        `Anybody who has been seriously engaged in scientific work of any kind realizes that over 
the entrance to the gates of the temple of science are written the words: 'Ye must have faith.'`,
        `A new scientific truth does not triumph by convincing its opponents and making them see the light, 
but rather because its opponents eventually die, and a new generation grows up that is familiar with it.`,
        `Science cannot solve the ultimate mystery of nature. And that is because, in the last analysis, 
we ourselves are a part of the mystery that we are trying to solve.`,
        `If you change the way you look at things, the things you look at change`,
      ],
    },
    {
      name: "Albert Einstein",
      from: "1879",
      to: "1955",
      image: "./images/albert-einstein.png",
      quotes: [
        `Coincidence is God's way of remaining anonymous.`,
        `A person who never made a mistake never tried anything new.`,
        `If you can't explain it simply, you don't understand it well enough.`,
        `The only source of knowledge is experience.`,
        `When the solution is simple, God is answering.`,
        `No amount of experimentation can ever prove me right; a single experiment can prove me wrong.`,
        `Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.`,
        `Education is what remains after one has forgotten what one has learned in school.`,
        `Strive not to be a success, but rather to be of value.`,
        `Science without religion is lame, religion without science is blind.`,
        `Quantum mechanics is very impressive. But an inner voice tells me that it is not yet the real thing.
The theory produces a good deal but hardly brings us closer to the secret of the Old One. I am at all events
convinced that He does not play dice.`,
        `I think that matter must have a separate reality independent of the measurements. That is an
electron has spin, location and so forth even when it is not being measured. I like to think that the moon is
there even if I am not looking at it.`,
      ],
    },
    {
      name: "Niels Bohr",
      from: "1885",
      to: "1962",
      image: "./images/niels-bohr.jpeg",
      quotes: [
        `An expert is a person who has made all the mistakes that can be made in a very narrow field.`,
        `Prediction is very difficult, especially about the future.`,
        `There are some things so serious that you have to laugh at them.`,
        `How wonderful that we have met with a paradox. Now we have some hope of making progress.`,
        `Everything we call real is made of things that cannot be regarded as real.`,
        `Those who are not shocked when they first come across quantum theory cannot possibly have understood it.`,
        `A physicist is just an atom's way of looking at itself.`,
        `The meaning of life consists in the fact that it makes no sense to say that life has no meaning.`,
        `Every great and deep difficulty bears in itself it’s own solution. It forces us to change our 
thinking in order to find it.`,
        `We are all agreed that your theory is crazy. The question which divides us is whether it is crazy 
enough to have a chance of being correct. My own feeling is that it is not crazy enough.`,
        `It is the hallmark of any deep truth that its negation is also a deep truth`,
        `It is not enough to be wrong, one must also be polite.`,
        `Physics is not about how the world is, it is about what we can say about the world`,
        `Einstein, stop telling God what to do!`,
      ],
    },
    {
      name: "Louis De Broglie",
      from: "1892",
      to: "1987",
      image: "./images/louis-de-broglie.jpeg",
      quotes: [
        `After long reflection in solitude and meditation, I suddenly had the idea, during the year 1923, 
that the discovery made by Einstein in 1905 should be generalised by extending it to all material particles 
and notably to electrons.`,
        `Science itself, no matter whether it is the search for truth or merely the need to gain control 
over the external world, to alleviate suffering, or to prolong life, is ultimately a matter of feeling, 
or rather, of desire-the desire to know or the desire to realize.`,
        `The history of science shows that the progress of science has constantly been hampered by the 
tyrannical influence of certain conceptions that finally came to be considered as dogma. For this reason, 
it is proper to submit periodically to a very searching examination, principles that we have come to assume 
without any more discussion.`,
        `Vulnerable, like all men, to the temptations of arrogance, of which intellectual pride is the worst, 
he [the scientist] must nevertheless remain sincere and modest, if only because his studies constantly bring 
home to him that, compared with the gigantic aims of science, his own contribution, no matter how important, 
is only a drop in the ocean of truth.`,
      ],
    },
    {
      name: "Werner Heisenberg",
      from: "1901",
      to: "1976",
      image: "./images/werner-heisenberg.jpeg",
      quotes: [
        `Not only is the Universe stranger than we think, it is stranger than we can think.`,
        `The reality we can put into words is never reality itself.`,
        `The first gulp from the glass of natural sciences will turn you into an atheist, 
but at the bottom of the glass God is waiting for you.`,
        `[The probability wave] meant a tendency for something. It was a quantitative version 
of the old concept of "potentia" in Aristoelian philosophy. It introduced something standing 
in the middle between the idea of an event and the actual event, a strange kind of physical 
reality just in the middle between possibility and reality.`,
        `Only a few know, how much one must know, to know how little one knows`,
        `In classical physics, science started from the belief – or should one say, from the illusion? – 
that we could describe the world, or least parts of the world, without any reference to ourselves.`,
        `Natural science, does not simply describe and explain nature; 
it is part of the interplay between nature and ourselves.`,
        `Quantum theory provides us with a striking illustration of the fact that we can fully 
understand a connection though we can only speak of it in images and parables.`,
      ],
    },
    {
      name: "Erwin Schrodinger",
      from: "1887",
      to: "1961",
      image: "./images/erwin-schrodinger.jpg",
      quotes: [
        `The task is not to see what has never been seen before, but to think what has never been thought
before about what you see everyday.`,
        `We do not belong to this material world that science constructs for us. We are not in it;
we are outside. We are only spectators. The reason why we believe that we are in it, that we belong 
to the picture, is that our bodies are in the picture. Our bodies belong to it. Not only my own body, 
but those of my friends, also of my dog and cat and horse, and of all the other people and animals. 
And this is my only means of communicating with them.`,
        `We must not wait for things to come, believing that they are decided by irrescindable destiny.
If we want it, we must do something about it.`,
        `Our perceiving self is nowhere to be found in the world-picture, because it itself is the world-picture.`,
        `I am very astonished that the scientific picture of the real world around me is deficient. 
It gives a lot of factual information, puts all our experience in a magnificently consistent order, 
but it is ghastly silent about all and sundry that is really near to our heart, that really matters to us. 
It cannot tell us a word about red and blue, bitter and sweet, physical pain and physical delight; 
it knows nothing of beautiful and ugly, good or bad, God and eternity.`,
        `From all we have learnt about the structure of living matter, we must be prepared to find
it working in a manner that cannot be reduced to the ordinary laws of physics. And that not on the 
ground that there is any 'new force' or what not, directing the behaviour of the single atoms within 
a living organism, but because the construction is different from anything we have yet tested in the 
physical laboratory.`,
        `The mathematical framework of quantum theory has passed countless successful tests and is 
now universally accepted as a consistent and accurate description of all atomic phenomena.The verbal
interpretation, on the other hand, i.e. the metaphysics of quantum physics, is on far less solid ground. 
In fact, in more than forty years physicists have not been able to provide a clear metaphysical model.`,
        `If all this damned quantum jumping were really here to stay, I should be sorry, I should be sorry 
I ever got involved with quantum theory.`,
      ],
    },
    {
      name: "Max Born",
      from: "1882",
      to: "1970",
      image: "./images/max-born.jpg",
      quotes: [
        `The belief that there is only one truth and that oneself is in possession of it seems to me the 
root of all the evil that is in the world`,
        `I am now convinced that theoretical physics is actual philosophy.`,
        `We have sought for firm ground and found none. The deeper we penetrate, 
the more restless becomes the universe; all is rushing about and vibrating in a wild dance.`,
        `Intellect distinguishes between the possible and the impossible; reason distinguishes 
between the sensible and the senseless. Even the possible can be senseless.`,
        `We, the atom and I, have been on friendly terms, until recently. I saw in it the key to 
the deepest secrets of Nature, and it revealed to me the greatness of creation and the Creator.`,
        `If alpha [the fine-structure constant] were bigger than it really is, we should not be able 
to distinguish matter from ether [the vacuum, nothingness], and our task to disentangle the natural 
laws would be hopelessly difficult. The fact however that alpha has just its value 1/137 is certainly 
no chance but itself a law of nature. It is clear that the explanation of this number must be the 
central problem of natural philosophy.`,
        `Einstein would be one of the greatest theoretical physicists of all time even if he had not 
written a single line on relativity.`,
      ],
    },
    {
      name: "Wolfgang Pauli",
      from: "1900",
      to: "1958",
      image: "./images/wolfgang-pauli.jpg",
      quotes: [
        `This isn't right. This isn't even wrong.`,
        `The best that most of us can hope to achieve in physics is simply to misunderstand at a deeper level.`,
        `The theoretical determination of the fine structure constant is certainly the most important of 
the unsolved problems of modern physics. We believe that any regression to the ideas of classical physics 
(as, for instance, to the use of the classical field concept)cannot bring us nearer to this goal. To reach 
it, we shall, presumably, have to pay with further revolutionary changes of the fundamental concepts of 
physics with a still farther digression from the concepts of the classical theories.`,
      ],
    },
    {
      name: "Paul Dirac",
      from: "1902",
      to: "1984",
      image: "./images/paul-dirac.jpeg",
      quotes: [
        `God is a mathematician of a very high order and He used advanced mathematics in constructing the universe.`,
        `The successful development of science requires a proper balance to be maintained between the method 
of building up from observations and the method of deducing by pure reasoning from speculative assumptions.`,
        `If you are receptive and humble, mathematics will lead you by the hand.`,
        `It seems clear that the present quantum mechanics is not in its final form. Some further changes 
will be needed, just about as drastic as the changes made in passing from Bohr's orbit theory to quantum 
mechanics. Some day a new quantum mechanics, a relativistic one, will be discovered, in which we will not 
have these infinities occurring at all. It might very well be that the new quantum mechanics will have 
determinism in the way that Einstein wanted.`,
        `If one is working from the point of view of getting beauty into one's equation, ... one is on a 
sure line of progress.`,
        `I cannot understand why we idle discussing religion. If we are honest—and scientists have to be—we 
must admit that religion is a jumble of false assertions, with no basis in reality. The very idea of God is 
a product of the human imagination. It is quite understandable why primitive people, who were so much more 
exposed to the overpowering forces of nature than we are today, should have personified these forces in fear 
and trembling. But nowadays, when we understand so many natural processes, we have no need for such solutions. 
I can't for the life of me see how the postulate of an Almighty God helps us in any way. What I do see is 
that this assumption leads to such unproductive questions as why God allows so much misery and injustice, 
the exploitation of the poor by the rich and all the other horrors He might have prevented. If religion is 
still being taught, it is by no means because its ideas still convince us, but simply because some of us 
want to keep the lower classes quiet. Quiet people are much easier to govern than clamorous and dissatisfied 
ones. They are also much easier to exploit. Religion is a kind of opium that allows a nation to lull itself 
into wishful dreams and so forget the injustices that are being perpetrated against the people. Hence the 
close alliance between those two great political forces, the State and the Church. Both need the illusion 
that a kindly God rewards—in heaven if not on earth—all those who have not risen up against injustice, who 
have done their duty quietly and uncomplainingly. That is precisely why the honest assertion that God is a 
mere product of the human imagination is branded as the worst of all mortal sins.`,
      ],
    },
    {
      name: "Enrico Fermi",
      from: "1901",
      to: "1954",
      image: "./images/enrico-fermi.jpeg",
      quotes: [
        `Before I came here, I was confused about this subject. Having listened to your lecture, 
I am still confused -- but on a higher level.`,
        `Experimental confirmation of a prediction is merely a measurement. An experiment disproving 
a prediction is a discovery.`,
        `It is not good to try to stop knowledge from going forward. Ignorance is never better 
than knowledge.`,
        `Where is everybody? Humans could theoretically colonize the galaxy in a million years or so, 
and if they could, astronauts from older civilizations could do the same. So why haven't they come to 
Earth?`,
        `When asked what characteristics Nobel prize winning physicists had in common ؛ I cannot think 
of a single one, not even intelligence`,
      ],
    },
    {
      name: "Julian Schwinger",
      from: "1918",
      to: "1994",
      image: "./images/julian-schwinger.jpg",
      quotes: [
        `Perhaps the most important contribution to science that the Royal Society has made in its three 
centuries of existence is its early role in publishing Newton's masterful account of his discoveries.`,
        `Classical mechanics is a determinate theory. Knowledge of the state at a given time permits precise 
prediction of the result of measuring any property of the system. In contrast, quantum mechanics is only 
statistically determinate.`,
        `Time appears in quantum mechanics as a continuous parameter which represents an abstraction of the 
dynamical role of the measurement apparatus.`,
        `Microscopic measurement has no meaning apart from a theory, and the idealized measurement concepts 
that are implicit in a particular theory must be accepted or rejected in accordance with the final success 
or failure of that theory to fulfill its avowed aims.`,
        `Mathematics is the natural language of theoretical physics. It is the irreplaceable instrument for 
the penetration of realms of physical phenomena far beyond the ordinary experience upon which conventional 
language is based.`,
        `Is the purpose of theoretical physics to be no more than a cataloging of all the things that can 
happen when particles interact with each other and separate? Or is it to be an understanding at a deeper 
level in which there are things that are not directly observable (as the underlying quantized fields are) 
but in terms of which we shall have a more fundamental understanding?`,
      ],
    },
    {
      name: "Richard Feynman",
      from: "1918",
      to: "1988",
      image: "./images/richard-feynman.jpg",
      quotes: [
        `Fall in love with some activity, and do it! Nobody ever figures out what life is all about, 
and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it 
deeply enough. Work as hard and as much as you want to on the things you like to do the best. Don't think 
about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so 
that society doesn't stop you from doing anything at all.`,
        `I think it's much more interesting to live not knowing than to have answers which might be wrong. 
I have approximate answers and possible beliefs and different degrees of uncertainty about different things, 
but I am not absolutely sure of anything and there are many things I don't know anything about, such as 
whether it means anything to ask why we're here. I don't have to know an answer. I don't feel frightened not 
knowing things, by being lost in a mysterious universe without any purpose, which is the way it really is as 
far as I can tell.`,
        `Religion is a culture of faith; science is a culture of doubt.`,
        `If you thought that science was certain - well, that is just an error on your part.`,
        `I'm smart enough to know that I'm dumb.`,
        `What I am going to tell you about is what we teach our physics students in the third or fourth year 
of graduate school... It is my task to convince you not to turn away because you don't understand it. 
You see my physics students don't understand it... That is because I don't understand it. Nobody does.`,
        `All the time you're saying to yourself, 'I could do that, but I won't,' — which is just another way 
of saying that you can't`,
        `I... a universe of atoms, an atom in the universe.`,
        `The first principle is that you must not fool yourself and you are the easiest person to fool.`,
        `I would rather have questions that can't be answered than answers that can't be questioned.`,
        `We are trying to prove ourselves wrong as quickly as possible, because only in that way can we 
find progress.`,
        `It doesn't seem to me that this fantastically marvelous universe, this tremendous range of time 
and space and different kinds of animals, and all the different planets, and all these atoms with all their 
motions, and so on, all this complicated thing can merely be a stage so that God can watch human beings 
struggle for good and evil - which is the view that religion has. The stage is too big for the drama.`,
        `We are at the very beginning of time for the human race. It is not unreasonable that we grapple 
with problems. But there are tens of thousands of years in the future. Our responsibility is to do what we 
can, learn what we can, improve the solutions, and pass them on.`,
      ],
    },
    {
      name: "Lev Landau",
      from: "1908",
      to: "1968",
      image: "./images/lev-landau.jpeg",
      quotes: [
        `Everybody has a capacity for a happy life. All these talks about how difficult times we live in, 
that's just a clever way to justify fear and laziness.`,
        `A method is more important than a discovery, since the right method will lead to new and even more 
important discoveries.`,
        `Most important part of doing physics is the knowledge of approximation.`,
        `Product of optimism and knowledge is a constant.`,
        `Cosmologists are often in error, but never in doubt`,
        `Money is in the exponent. And exponent needs to be calculated precisely.`,
        `We mathematicans are all a bit crazy.`,
        `This work contains many things which are new and interesting. Unfortunately, everything that is 
new is not interesting, and everything which is interesting, is not new.`,
      ],
    },
    {
      name: "Murray Gell-Mann",
      from: "1929",
      to: "2019",
      image: "./images/murray-gell-mann.jpg",
      quotes: [
        `Enthusiasm is followed by disappointment and even depression, and then by renewed enthusiasm.`,
        `Modern education is like being taken to the world's greatest restaurant & being forced to eat the menu.`,
        `For me, the study of these laws is inseparable from a love of Nature in all its manifestations. The beauty of the basic laws 
of natural science, as revealed in the study of particles and of the cosmos, is allied to the litheness of a merganser diving in a pure 
Swedish lake, or the grace of a dolphin leaving shining trails at night in the Gulf of California.`,
        `Sustainability is living on nature's income rather than living on its capital.`,
        `Everything that is not forbidden is compulsory.`,
        `If I have seen further than others, it is because I am surrounded by dwarfs.`,
        `What is especially striking and remarkable is that in fundamental physics, a beautiful or elegant theory is more likely to be 
right than a theory that is inelegant. A theory appears to be beautiful or elegant (or simple, if you prefer) when it can be expressed 
concisely in terms of mathematics we already have. Symmetry exhibits the simplicity. The Foundamental Law is such that the different 
skins of the onion resemble one another and therefore the math for one skin allows you to express beautifully and simply the phenomenon 
of the next skin.`,
        `If someone says that he can think or talk about quantum physics without becoming dizzy, that shows only that he has not 
understood anything whatever about it.`,
        `Of course the word chaos is used in rather a vague sense by a lot of writers, but in physics it means a particular phenomenon, 
namely that in a nonlinear system the outcome is often indefinitely, arbitrarily sensitive to tiny changes in the initial condition`,
        `The mathematics clearly called for a set of underlying elementary objects-at that time we needed three types of them-elementary
objects that could be combined three at a time in different ways to make all the heavy particles we knew. ... I needed a name for them and 
called them quarks, after the taunting cry of the gulls, "Three quarks for Muster mark," from Finnegan's Wake by the Irish writer 
James Joyce.`,
        `All of modern physics is governed by that magnificent and thoroughly confusing discipline called quantum mechanics ... It has 
survived all tests and there is no reason to believe that there is any flaw in it. We all know how to use it and how to apply it to 
problems; and so we have learned to live with the fact that nobody can understand it.`,
        ` Niels Bohr brainwashed a whole generation of theorists into thinking that the job (interpreting quantum theory) 
was done 50 years ago.`,
        `If you know the wavefunction of the universe, why aren't you rich?`,
        `I thought of killing myself but soon decided that I could always try MIT and then kill myself later if it was that bad 
but that I couldn't commit suicide and then try MIT afterwards. The two operations, suicide and going to MIT, don't commute.`,
      ],
    },
    {
      name: "Sheldon Glashow",
      from: "1932",
      to: "",
      image: "./images/sheldon-glashow.jpeg",
      quotes: [
        `Tapestries are made by many artisans working together. The contributions of separate workers 
cannot be discerned in the completed work, and the loose and false threads have been covered over. 
So it is in our picture of particle physics.`,
        `We called the new [fourth] quark the "charmed quark" because we were pleased, and fascinated 
by the symmetry it brought to the subnuclear world. "Charm" also means a "a magical device to avert evil," 
and in 1970 it was realized that the old three quark theory ran into very serious problems. ... As if by 
magic the existence of the charmed quark would [solve those problems].`,
      ],
    },
    {
      name: "Steven Weinberg",
      from: "1933",
      to: "",
      image: "./images/steven-weinberg.jpg",
      quotes: [
        `The idea is to see how far one can go without supposing supernatural intervention.`,
        `Scientific theories cannot be deduced by purely mathematical reasoning.`,
        `At its most fundamental level science is not undertaken for any practical reason.`,
        `As is natural for an academic, when I want to learn about something, I volunteer to teach a 
course on the subject.`,
        `Whatever the final laws of nature may be, there is no reason to suppose that they are designed 
to make physicists happy.`,
        `It does not matter whether you win or lose, what matters is whether I win or lose!`,
        `Science doesn't make it impossible to believe in God, it just makes it possible not to believe in God`,
        `All logical arguments can be defeated by the simple refusal to reason logically`,
        `Religion is an insult to human dignity. Without it you would have good people doing good things 
and evil people doing evil things. But for good people to do evil things, that takes religion.`,
        `The invisible and the non-existent look very much alike.`,
        `I think enormous harm is done by religion - not just in the name of religion, but actually by 
religion. ... Many people do simply awful things out of sincere religious belief, not using religion as 
a cover the way that Saddam Hussein may have done, but really because they believe that this is what 
God wants them to do, going all the way back to Abraham being willing to sacrifice Isaac because God 
told him to do that. Putting God ahead of humanity is a terrible thing.`,
        ` I have a friend — or had a friend, now dead — Abdus Salam, a very devout Muslim, who was trying 
to bring science into the universities in the Gulf states and he told me that he had a terrible time because, 
although they were very receptive to technology, they felt that science would be a corrosive to religious 
belief, and they were worried about it… and damn it, I think they were right. It is corrosive of religious 
belief, and it’s a good thing too.`,
      ],
    },
  ];

  const initialRenderOrder = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
  ];

  const [renderOrder, setRenderOrder] = useState(initialRenderOrder);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(loadTopScore());
  const [alreadyClicked, setAlreadyClicked] = useState([]);
  const [modal, setModal] = useState({
    id: 0,
    show: false,
    isMistakeMade: false,
  });

  useEffect(() => {
    saveTopScore();
  }, [highestScore]);

  const generateRandomOrder = () => {
    let len = renderOrder.length;
    const copyRenderOrder = [...renderOrder];
    const newRenderOrder = [];
    let index;
    while (len > 0) {
      index = Math.floor(Math.random() * len);
      newRenderOrder.push(copyRenderOrder[index]);
      copyRenderOrder.splice(index, 1);
      len--;
    }
    setRenderOrder(newRenderOrder);
  };

  function isMistakeMade(id) {
    let isMistakeMade = false;
    alreadyClicked.forEach((index) => {
      if (index === id) {
        isMistakeMade = true;
      }
    });
    return isMistakeMade;
  }

  const changeScore = (id) => {
    if (isMistakeMade(id)) {
      if (score > highestScore) {
        setHighestScore(score);
      }
      setScore(0);
      setAlreadyClicked([]);
    } else {
      const copyAlreadyClicked = [...alreadyClicked];
      copyAlreadyClicked.push(id);
      setAlreadyClicked(copyAlreadyClicked);
      setScore(score + 1);
    }
  };

  const showModal = (id) => {
    const newModal = {
      id: id,
      show: true,
      isMistakeMade: isMistakeMade(id),
    };
    setModal(newModal);
  };

  const handleClick = (id) => {
    showModal(id, alreadyClicked);
    changeScore(id);
    generateRandomOrder();
  };

  const hideModal = () => {
    const newModal = { ...modal };
    newModal.show = false;
    setModal(newModal);
  };

  function getVariantName() {
    let className = "";
    if (modal.isMistakeMade) {
      className = "danger";
    } else {
      className = "success";
    }
    return className;
  }

  function getModalClasses() {
    return "bg-" + getVariantName() + " text-light";
  }

  function getRandomQuote(id) {
    const len = physicists[id].quotes.length;
    const randomIndex = Math.floor(Math.random() * len);
    return physicists[id].quotes[randomIndex];
  }

  function saveTopScore() {
    localStorage.setItem("topScore", highestScore.toString());
  }

  function loadTopScore() {
    const result = Number(localStorage.getItem("topScore"));
    if (result) return result;
    else return 0;
  }

  return (
    <div className="App bg-secondary">
      <TitleBar score={score} highestScore={highestScore} />
      <div className="cardContainer">
        <div className="row">
          {renderOrder.map((index) => {
            return (
              <PictureCard
                content={physicists[index]}
                key={index}
                id={index}
                onButtonClick={(id) => handleClick(id)}
              />
            );
          })}
        </div>
      </div>
      <Modal show={modal.show} onHide={hideModal}>
        <Modal.Title className={getModalClasses()}>
          {(modal.isMistakeMade && "Ouch!") ||
            physicists[modal.id].name + " quote"}
        </Modal.Title>
        <Modal.Body>
          {(modal.isMistakeMade &&
            "You have lost your score becuse of choosing the same physicist again.") || (
            <p>{getRandomQuote(modal.id)}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={getVariantName()} onClick={hideModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
