const emotionsData = {
  name: "Center", leaves: 0,
  children: [
    {
      name: "Bad", color: "#5b2b7b", def: "A general heavy, sluggish, or uncomfortable feeling throughout your body. It's an overarching physical unease.",
      children: [
        { name: "Tired", def: "Your limbs feel heavy like lead. Your body aches for rest.", children: [{name: "Sleepy", def: "Your eyelids droop, and your head feels heavy to hold up."}, {name: "Unfocused", def: "Your eyes glaze over. A fuzzy, cloudy sensation in your head."}] },
        { name: "Stressed", def: "Tightness in your shoulders and neck. Your chest feels constricted.", children: [{name: "Overwhelmed", def: "A crushing weight on your chest. Sensory input feels too loud or bright."}, {name: "Out of control", def: "A floating, ungrounded sensation, often with a racing, fluttering heart."}] },
        { name: "Busy", def: "A buzzy, restless energy in your limbs. You feel like you can't stop moving.", children: [{name: "Rushed", def: "A quickened pulse and a tight, breathless feeling in your throat."}, {name: "Pressured", def: "A literal physical weight pressing down on your shoulders or chest."}] },
        { name: "Bored", def: "A restless, fidgety feeling in your limbs, combined with a heavy sigh.", children: [{name: "Apathetic", def: "Complete physical numbness and a lack of energy to move your body."}, {name: "Indifferent", def: "A relaxed but flat posture. No physical pull toward anything."}] }
      ]
    },
    {
      name: "Fearful", color: "#c91c73", def: "Your heart races, breathing gets shallow, and your muscles tense up, ready to run.",
      children: [
        { name: "Scared", def: "A sudden jolt in your stomach, accompanied by a cold sweat and widened eyes.", children: [{name: "Helpless", def: "Your body feels limp, paralyzed, or frozen in place."}, {name: "Frightened", def: "A sharp gasp, a racing heart, and an instinctive physical recoil."}] },
        { name: "Anxious", def: "A fluttering knot in your stomach, shallow breathing, and jittery hands.", children: [{name: "Concerned", def: "A slight furrowing of the brow and a mild, nagging tension in the forehead."}, {name: "Worried", def: "A churning stomach and a tense, rigid posture. You might bite your lip."}] },
        { name: "Insecure", def: "A desire to physically shrink or fold your arms across your chest.", children: [{name: "Inadequate", def: "Feeling physically small. Your shoulders hunch forward defensively."}, {name: "Inferior", def: "A sinking feeling in your gut and a downward cast of your eyes."}] },
        { name: "Weak", def: "Your muscles feel like jelly. Your knees might tremble.", children: [{name: "Worthless", def: "A crushing heaviness in the chest. Looking downward, lacking energy to stand straight."}, {name: "Insignificant", def: "A feeling of physical emptiness or transparency, like you take up no space."}] },
        { name: "Rejected", def: "A sharp, literal ache in the center of your chest. A sudden drop in stomach.", children: [{name: "Excluded", def: "A cold, hollow sensation in your torso. A physical pulling away."}, {name: "Persecuted", def: "A hyper-alert, twitchy energy. Glancing over your shoulder constantly."}] },
        { name: "Threatened", def: "Adrenaline floods your limbs. Your jaw clenches and eyes dart quickly.", children: [{name: "Nervous", def: "Butterflies in the stomach, sweaty palms, and a shaky voice."}, {name: "Exposed", def: "A sudden flush of heat. An urge to physically cover your face or body."}] }
      ]
    },
    {
      name: "Angry", color: "#c32026", def: "Heat rises in your face and chest. Your jaw clenches and fists tighten instinctively.",
      children: [
        { name: "Let down", def: "A sudden deflation of energy, like a balloon losing air.", children: [{name: "Betrayed", def: "A physical punch to the gut. A hot, burning sensation in your chest."}, {name: "Resentful", def: "A slow, simmering heat in your belly and a stiffened neck."}] },
        { name: "Humiliated", def: "A burning hot flush spreading across your face and neck. An urge to disappear.", children: [{name: "Disrespected", def: "Your spine snaps rigidly straight. Your chest puffs out defensively."}, {name: "Ridiculed", def: "A stinging sensation in your face, followed by a tight, rigid throat."}] },
        { name: "Bitter", def: "A tightness in the jaw and a physical sourness in the back of the mouth.", children: [{name: "Indignant", def: "A surge of hot, upward energy. Your voice naturally raises in volume."}, {name: "Violated", def: "A sickening mix of a dropped stomach and sudden, shaky heat."}] },
        { name: "Mad", def: "A rapid, pounding heartbeat and a tense, locked jaw.", children: [{name: "Furious", def: "Explosive heat radiating through your arms and chest. Shaking with excess energy."}, {name: "Jealous", def: "A hot, gripping tightness in the chest and a rigid, hyper-focused stare."}] },
        { name: "Aggressive", def: "A forward-leaning stance. Muscles coil and tighten, ready for physical action.", children: [{name: "Provoked", def: "A sudden, electric spike of adrenaline and a flushed face."}, {name: "Hostile", def: "A permanent scowl, crossed arms, and a hardened, rigid physical exterior."}] },
        { name: "Frustrated", def: "A restless urge to rip or break something. Heavy sighs and clenched teeth.", children: [{name: "Infuriated", def: "Blood pounding in your ears. Shallow, rapid breaths through the nose."}, {name: "Annoyed", def: "A twitchy irritation, often accompanied by eye-rolling and minor muscle tension."}] },
        { name: "Distant", def: "A physical pulling back. Your face feels blank and your body turns away.", children: [{name: "Withdrawn", def: "Your body folds inward. Avoiding eye contact and crossing your limbs."}, {name: "Numb", def: "A thick, dull sensation, like your body is wrapped in cotton. Inability to feel your limbs."}] },
        { name: "Critical", def: "Eyes narrow, lips purse. A tight, judgmental tension in the facial muscles.", children: [{name: "Sceptical", def: "One eyebrow raises, the head tilts, and the body remains rigid and guarded."}, {name: "Dismissive", def: "A physical turning away, a wave of the hand, and a relaxed but closed posture."}] }
      ]
    },
    {
      name: "Disgusted", color: "#8e5229", def: "Your stomach churns. Your nose wrinkles automatically, and your body pulls away.",
      children: [
        { name: "Disapproving", def: "A slight recoil of the head. Lips press tightly together into a thin line.", children: [{name: "Judgmental", def: "A stiff, upward tilt of the chin and a narrowing of the eyes."}, {name: "Condemned", def: "A cold, hardened stare and a completely closed-off posture."}] },
        { name: "Uncomfortable", def: "Shifting your weight constantly. A crawling sensation on your skin.", children: [{name: "Appalled", def: "Your jaw drops slightly, and your body jolts backward in recoil."}, {name: "Revolted", def: "A visceral gag reflex. An overwhelming physical need to turn your whole body away."}] },
        { name: "Awful", def: "A sickening, heavy dropping sensation in your lower abdomen.", children: [{name: "Nauseated", def: "Literal sickness in the stomach. Increased saliva and a pale, clammy feeling."}, {name: "Detestable", def: "A shudder traveling down your spine and a scrunched, tense face."}] },
        { name: "Repelled", def: "The kinesthetic urge to physically push something away with your hands.", children: [{name: "Horrified", def: "Paralysis, wide eyes, a dropped jaw, and skin prickling with goosebumps."}, {name: "Hesitant", def: "Freezing mid-movement. A physical reluctance to take a step forward."}] }
      ]
    },
    {
      name: "Sad", color: "#273a72", def: "A heavy, sinking sensation in your chest. A lump forms in your throat.",
      children: [
        { name: "Hurt", def: "A sharp, physical ache in the center of your chest. Tears welling up.", children: [{name: "Embarrassed", def: "A sudden flush of heat in your cheeks. A strong urge to look at the floor."}, {name: "Disappointed", def: "A heavy sigh, a dropping of the shoulders, and a sudden drain of energy."}] },
        { name: "Depressed", def: "Profound physical heaviness. Every movement feels like walking through thick mud.", children: [{name: "Unseen", def: "A hollow, fading sensation, as if you are physically shrinking."}, {name: "Empty", def: "A cold, cavernous void in your chest or stomach."}] },
        { name: "Guilty", def: "A heavy pit in your stomach. Your shoulders slump forward.", children: [{name: "Remorseful", def: "A continuous, sinking ache in the gut and a bowed head."}, {name: "Ashamed", def: "A burning face and a desperate physical urge to curl into a ball and hide."}] },
        { name: "Despair", def: "Total physical collapse. Weeping, sobbing, or completely devoid of energy.", children: [{name: "Grief", def: "Waves of intense physical pain in the chest, shortness of breath, and uncontrollable crying."}, {name: "Powerless", def: "Complete physical limpness. Your arms and legs feel heavy and useless."}] },
        { name: "Vulnerable", def: "A sensitive, exposed feeling, like walking without armor. You flinch easily.", children: [{name: "Victimised", def: "A tense, huddled posture mixed with a faint, trembling anger."}, {name: "Fragile", def: "Feeling physically brittle, like a loud noise or touch could shatter you."}] },
        { name: "Lonely", def: "An aching emptiness in your chest and a literal feeling of coldness in your limbs.", children: [{name: "Isolated", def: "A hollow, echoing sensation in the body. A physical feeling of being stranded."}, {name: "Abandoned", def: "A sudden panic and coldness, followed by a profound, sobbing heaviness."}] }
      ]
    },
    {
      name: "Happy", color: "#e67715", def: "Your body feels light and warm. Your chest is open and your breathing is steady.",
      children: [
        { name: "Optimistic", def: "A buoyant, forward-leaning energy. A natural, easy smile.", children: [{name: "Inspired", def: "A rush of warm, tingling energy spreading through your chest and head."}, {name: "Hopeful", def: "A warm, glowing sensation in the center of your chest."}] },
        { name: "Trusting", def: "Muscles completely relax. Your posture is open, arms uncrossed.", children: [{name: "Intimate", def: "A warm, melting sensation. A physical desire to lean in and be close."}, {name: "Sensitive", def: "A gentle, receptive awareness. Your skin feels highly attuned to touch."}] },
        { name: "Peaceful", def: "A slowed heart rate, deep, effortless breathing, and heavy but relaxed limbs.", children: [{name: "Thankful", def: "A warm expansion in the chest. A sigh of relief."}, {name: "Loving", def: "A glowing warmth in the heart center. A physical softening of the eyes and face."}] },
        { name: "Powerful", def: "Your spine naturally straightens. Your chest expands and your stance widens.", children: [{name: "Creative", def: "A fluid, buzzing energy in the brain. Time seems to disappear."}, {name: "Courageous", def: "A solid, grounded feeling in your legs and a firm, steady heartbeat."}] },
        { name: "Accepted", def: "A deep exhalation. The tension drops completely from your shoulders.", children: [{name: "Valued", def: "A warm, uplifting sensation in the chest and an upright posture."}, {name: "Respected", def: "Your chin naturally tilts up slightly. A feeling of physical solidness."}] },
        { name: "Proud", def: "Your chest puffs out naturally. You stand taller and breathe deeply.", children: [{name: "Confident", def: "A relaxed, steady gait. You hold eye contact easily and move smoothly."}, {name: "Successful", def: "A rush of warm, tingling adrenaline and a physical urge to celebrate."}] },
        { name: "Interested", def: "Leaning forward slightly. Your eyes widen and track movement intently.", children: [{name: "Inquisitive", def: "A tilted head, raised eyebrows, and a forward-focused posture."}, {name: "Curious", def: "A light, pulling sensation drawing you physically toward a subject."}] },
        { name: "Content", def: "A completely neutral, relaxed body. No urges to move or change anything.", children: [{name: "Joyful", def: "A bubbly, warm energy in the chest. An urge to laugh, jump, or dance."}, {name: "Free", def: "A literal lightness in the shoulders and back. Movements feel expansive and easy."}] },
        { name: "Playful", def: "A bouncy, restless energy. Your face breaks easily into a grin.", children: [{name: "Cheeky", def: "A mischievous glint in the eye and a suppressed, twitching smile."}, {name: "Aroused", def: "Heightened senses, a flushed face, an accelerated pulse, and a rush of heat."}] }
      ]
    },
    {
      name: "Surprised", color: "#237a44", def: "A sudden intake of breath, widened eyes, and a momentary freezing of the body.",
      children: [
        { name: "Excited", def: "Bouncing on the balls of your feet. A rapidly beating heart and a huge smile.", children: [{name: "Energetic", def: "A physical surplus of energy. A relentless urge to run, jump, or move."}, {name: "Eager", def: "Leaning far forward. Muscles tense in anticipation, ready to spring."}] },
        { name: "Amazed", def: "A completely slack jaw. Your breathing stops for a second.", children: [{name: "Awe", def: "Goosebumps breaking out on your arms. A feeling of physical smallness but vast openness."}, {name: "Astonished", def: "Total physical paralysis for a moment as your brain catches up."}] },
        { name: "Confused", def: "A furrowed brow, a tilted head, and a slowing of physical movement.", children: [{name: "Perplexed", def: "Squinting eyes and a tense forehead. You might scratch your head or rub your chin."}, {name: "Disillusioned", def: "A sudden, heavy sinking in the stomach. A physical dropping of the face."}] },
        { name: "Startled", def: "A full-body flinch. Your shoulders jump toward your ears instantly.", children: [{name: "Dismayed", def: "A sickening drop in the stomach and a sudden slump in the shoulders."}, {name: "Shocked", def: "A cold sweat, a gaping mouth, and a feeling of being completely frozen in time."}] }
      ]
    }
  ]
};