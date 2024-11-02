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


    //Birthplace or Home


    //Past


    //Religion


    //Family


    //Sexuality


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



        "\n\n⚔️Generated by Ethertale⚔️",
        "\nhttps://github.com/Ethertale",
        "\nCredits to AC Arcana for the base"
    ], { type: 'text/plain' });

    link.href = URL.createObjectURL(file);
    link.download = "YourCharacter.txt";
    link.click();
    URL.revokeObjectURL(link.href);
};