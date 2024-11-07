const downloadFile = () => {
    const link = document.createElement("a");

    //Role

    const race = document.getElementById("race");
    const role_race = race.options[race.selectedIndex].text;
    const archetype = document.getElementById("archetype");
    const role_Archetype = archetype.options[archetype.selectedIndex].text;
    const preferredWeapon = document.getElementById("preferredWeapon");
    const role_PreferredWeapon = preferredWeapon.options[preferredWeapon.selectedIndex].text;
    const alignment = document.getElementById("alignment");
    const role_Alignment = alignment.options[alignment.selectedIndex].text;

    //Appearance

    const age = document.getElementById("age");
    const appearance_age = age.options[age.selectedIndex].text;
    const gender = document.getElementById("gender");
    const appearance_gender = gender.options[gender.selectedIndex].text;
    const height = document.getElementById("height");
    const appearance_height = height.options[height.selectedIndex].text;
    const weight = document.getElementById("weight");
    const appearance_weight = weight.options[weight.selectedIndex].text;
    const skin = document.getElementById("skin");
    const appearance_skin = skin.options[skin.selectedIndex].text;
    const eyeColor = document.getElementById("eyeColor");
    const appearance_eyeColor = eyeColor.options[eyeColor.selectedIndex].text;
    const hairColor = document.getElementById("hairColor");
    const appearance_hairColor = hairColor.options[hairColor.selectedIndex].text;
    const hairStyle = document.getElementById("hairStyle");
    const appearance_hairStyle = hairStyle.options[hairStyle.selectedIndex].text;
    const beard = document.getElementById("beard");
    const appearance_beard = beard.options[beard.selectedIndex].text;
    const style = document.getElementById("style");
    const appearance_style = style.options[style.selectedIndex].text;


    //Personality

    const goal = document.getElementById("goal");
    const personality_goal = goal.options[goal.selectedIndex].text;
    const outlook = document.getElementById("outlook");
    const personality_outlook = outlook.options[outlook.selectedIndex].text;
    const humor = document.getElementById("humor");
    const personality_humor = humor.options[humor.selectedIndex].text;
    const emotions = document.getElementById("emotions");
    const personality_emotions = emotions.options[emotions.selectedIndex].text;
    const quirks = document.getElementById("quirks");
    const personality_quirks = quirks.options[quirks.selectedIndex].text;

    //Birthplace or Home

    const homeSize = document.getElementById("homeSize");
    const boh_homeSize = homeSize.options[homeSize.selectedIndex].text;
    const homeEnvironment = document.getElementById("homeEnvironment");
    const boh_homeEnvironment = homeEnvironment.options[homeEnvironment.selectedIndex].text;
    const homeIndustry = document.getElementById("homeIndustry");
    const boh_homeIndustry = homeIndustry.options[homeIndustry.selectedIndex].text;
    const homeCommunity = document.getElementById("homeCommunity");
    const boh_homeCommunity = homeCommunity.options[homeCommunity.selectedIndex].text;

    //Past

    const pastEvent = document.getElementById("pastEvent");
    const past_pastEvent = pastEvent.options[pastEvent.selectedIndex].text;
    const education = document.getElementById("education");
    const past_education = education.options[education.selectedIndex].text;

    //Religion

    const faith = document.getElementById("faith");
    const religion_faith = faith.options[faith.selectedIndex].text;
    const denomination = document.getElementById("denomination");
    const religion_denomination = denomination.options[denomination.selectedIndex].text;
    const religionPopularity = document.getElementById("religionPopularity");
    const religion_religionPopularity = religionPopularity.options[religionPopularity.selectedIndex].text;

    //Family

    const siblings = document.getElementById("faith");
    const family_siblings = siblings.options[siblings.selectedIndex].text;
    const familySize = document.getElementById("familySize");
    const family_familySize = familySize.options[familySize.selectedIndex].text;
    const familyOutlook = document.getElementById("familyOutlook");
    const family_familyOutlook = familyOutlook.options[familyOutlook.selectedIndex].text;
    const familyReputation = document.getElementById("familyReputation");
    const family_familyReputation = familyReputation.options[familyReputation.selectedIndex].text;
    const familyWealth = document.getElementById("familyWealth");
    const family_familyWealth = familyWealth.options[familyWealth.selectedIndex].text;


    //Sexuality

    const sexualOrientation = document.getElementById("sexualOrientation");
    const sexuality_sexualOrientation = sexualOrientation.options[sexualOrientation.selectedIndex].text;
    const sexDrive = document.getElementById("sexDrive");
    const sexuality_sexDrive = sexDrive.options[sexDrive.selectedIndex].text;


    const file = new Blob([
        "Ⅰ. Role\n",
        "\nRace -> " + role_race,
        "\nArchetype -> " + role_Archetype,
        "\nPreferred Weapon -> " + role_PreferredWeapon,
        "\nAlignment -> " + role_Alignment,
        
        "\n\nⅡ. Appearance\n",
        "\nAge -> " + appearance_age,
        "\nGender -> " + appearance_gender,
        "\nHeight -> " + appearance_height,
        "\nWeight -> " + appearance_weight,
        "\nSkin -> " + appearance_skin,
        "\nEye Color -> " + appearance_eyeColor,
        "\nHair Color -> " + appearance_hairColor,
        "\nHair Style -> " + appearance_hairStyle,
        "\nBeard -> " + appearance_beard,
        "\nStyle -> " + appearance_style,

        "\n\nⅢ. Personality\n",
        "\nGoal -> " + personality_goal,
        "\nOutlook -> " + personality_outlook,
        "\nHumor -> " + personality_humor,
        "\nEmotions -> " + personality_emotions,
        "\nQuirks -> " + personality_quirks,

        "\n\nⅣ. Birthplace or Home\n",
        "\nHome Size -> " + boh_homeSize,
        "\nHome Environment -> " + boh_homeEnvironment,
        "\nHome Industry -> " + boh_homeIndustry,
        "\nHome Community -> " + boh_homeCommunity,

        "\n\nⅤ. Past\n",
        "\nPast Event -> " + past_pastEvent,
        "\nEducation -> " + past_education,

        "\n\nⅥ. Religion\n",
        "\nFaith -> " + religion_faith,
        "\nDenomination -> " + religion_denomination,
        "\nPopularity -> " + religion_religionPopularity,

        "\n\nⅦ. Family\n",
        "\nSiblings -> " + family_siblings,
        "\nSize -> " + family_familySize,
        "\nOutlook -> " + family_familyOutlook,
        "\nReputation -> " + family_familyReputation,
        "\nWealth -> " + family_familyWealth,

        "\n\nⅧ. Sexuality\n",
        "\nSexual Orientation -> " + sexuality_sexualOrientation,
        "\nSex Drive -> " + sexuality_sexDrive,


        "\n\n⚔️Generated by Ethertale⚔️",
        "\nhttps://github.com/Ethertale",
        "\nCredits to AC Arcana for the base"
    ], { type: 'text/plain' });

    link.href = URL.createObjectURL(file);
    link.download = "YourCharacter.txt";
    link.click();
    URL.revokeObjectURL(link.href);
};