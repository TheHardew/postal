document.addEventListener("DOMContentLoaded", start);

var saveFile = {
    data: new Uint8Array([49, 0, 0, 0, 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 244, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),

    get version() {
        return new Uint32Array(this.data.buffer, 0, 4)[0];
    },
    set version(version) {
        new Uint32Array(this.data.buffer, 0, 4)[0] = version;
    },

    get difficulty() {
        return new Uint16Array(this.data.buffer, 4, 2)[0];
    },
    set difficulty(difficulty) {
        new Uint16Array(this.data.buffer, 4, 2)[0] = difficulty;
    },

    get action() {
        return new Uint16Array(this.data.buffer, 6, 2)[0];
    },
    set action(action) {
        new Uint16Array(this.data.buffer, 6, 2)[0] = action;
    },

    get level() {
        return new Uint16Array(this.data.buffer, 8, 2)[0];
    },
    set level(level) {
        new Uint16Array(this.data.buffer, 8, 2)[0] = level;
    },

    get unlocked_double_barrel() {
        return new Uint16Array(this.data.buffer, 10, 2)[0];
    },
    set unlocked_double_barrel(unlocked_double_barrel) {
        new Uint16Array(this.data.buffer, 10, 2)[0] = unlocked_double_barrel;
    },

    get unlocked_deathwad() {
        return new Uint16Array(this.data.buffer, 12, 2)[0];
    },
    set unlocked_deathwad(unlocked_deathwad) {
        new Uint16Array(this.data.buffer, 12, 2)[0] = unlocked_deathwad;
    },

    get unlocked_napalm() {
        return new Uint16Array(this.data.buffer, 14, 2)[0];
    },
    set unlocked_napalm(unlocked_napalm) {
        new Uint16Array(this.data.buffer, 14, 2)[0] = unlocked_napalm;
    },

    get unlocked_backpack() {
        return new Uint16Array(this.data.buffer, 16, 2)[0];
    },
    set unlocked_backpack(unlocked_backpack) {
        new Uint16Array(this.data.buffer, 16, 2)[0] = unlocked_backpack;
    },

    get armor_real() {
        return new Uint16Array(this.data.buffer, 18, 2)[0];
    },
    set armor_real(armor_real) {
        new Uint16Array(this.data.buffer, 18, 2)[0] = armor_real;
    },

    get unlocked_m16() {
        return new Uint16Array(this.data.buffer, 20, 2)[0];
    },
    set unlocked_m16(unlocked_m16) {
        new Uint16Array(this.data.buffer, 20, 2)[0] = unlocked_m16;
    },

    get unlocked_missiles() {
        return new Uint16Array(this.data.buffer, 22, 2)[0];
    },
    set unlocked_missiles(unlocked_missiles) {
        new Uint16Array(this.data.buffer, 22, 2)[0] = unlocked_missiles;
    },

    get unlocked_shotgun() {
        return new Uint16Array(this.data.buffer, 24, 2)[0];
    },
    set unlocked_shotgun(unlocked_shotgun) {
        new Uint16Array(this.data.buffer, 24, 2)[0] = unlocked_shotgun;
    },

    get unlocked_assault_rifle() {
        return new Uint16Array(this.data.buffer, 26, 2)[0];
    },
    set unlocked_assault_rifle(unlocked_assault_rifle) {
        new Uint16Array(this.data.buffer, 26, 2)[0] = unlocked_assault_rifle;
    },

    get unlocked_flamethrower() {
        return new Uint16Array(this.data.buffer, 28, 2)[0];
    },
    set unlocked_flamethrower(unlocked_flamethrower) {
        new Uint16Array(this.data.buffer, 28, 2)[0] = unlocked_flamethrower;
    },

    get health_real() {
        return new Uint16Array(this.data.buffer, 30, 2)[0];
    },
    set health_real(health_real) {
        new Uint16Array(this.data.buffer, 30, 2)[0] = health_real;
    },

    get grenades() {
        return new Uint16Array(this.data.buffer, 32, 2)[0];
    },
    set grenades(grenades) {
        new Uint16Array(this.data.buffer, 32, 2)[0] = grenades;
    },

    get molotovs() {
        return new Uint16Array(this.data.buffer, 34, 2)[0];
    },
    set molotovs(molotovs) {
        new Uint16Array(this.data.buffer, 34, 2)[0] = molotovs;
    },

    get missiles() {
        return new Uint16Array(this.data.buffer, 36, 2)[0];
    },
    set missiles(missiles) {
        new Uint16Array(this.data.buffer, 36, 2)[0] = missiles;
    },

    get napalm() {
        return new Uint16Array(this.data.buffer, 38, 2)[0];
    },
    set napalm(napalm) {
        new Uint16Array(this.data.buffer, 38, 2)[0] = napalm;
    },

    get bullets() {
        return new Uint16Array(this.data.buffer, 40, 2)[0];
    },
    set bullets(bullets) {
        new Uint16Array(this.data.buffer, 40, 2)[0] = bullets;
    },

    get shotgun_ammo() {
        return new Uint16Array(this.data.buffer, 42, 2)[0];
    },
    set shotgun_ammo(shotgun_ammo) {
        new Uint16Array(this.data.buffer, 42, 2)[0] = shotgun_ammo;
    },

    get fuel_real() {
        return new Uint16Array(this.data.buffer, 44, 2)[0];
    },
    set fuel_real(fuel_real) {
        new Uint16Array(this.data.buffer, 44, 2)[0] = fuel_real;
    },

    get mines() {
        return new Uint16Array(this.data.buffer, 46, 2)[0];
    },
    set mines(mines) {
        new Uint16Array(this.data.buffer, 46, 2)[0] = mines;
    },

    get homing_missiles() {
        return new Uint16Array(this.data.buffer, 48, 2)[0];
    },
    set homing_missiles(homing_missiles) {
        new Uint16Array(this.data.buffer, 48, 2)[0] = homing_missiles;
    },

    get used_m16() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 0);
    },
    set used_m16(used_m16) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_m16 ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 0) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 0), true);
    },

    get used_shotgun() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 1);
    },
    set used_shotgun(used_shotgun) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_shotgun ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 1) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 1), true);
    },

    get used_double_barrel() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 2);
    },
    set used_double_barrel(used_double_barrel) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_double_barrel ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 2) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 2), true);
    },

    get used_grenades() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 3);
    },
    set used_grenades(used_grenades) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_grenades ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 3) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 3), true);
    },

    get used_missiles() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 4);
    },
    set used_missiles(used_missiles) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_missiles ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 4) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 4), true);
    },

    get used_molotovs() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 5);
    },
    set used_molotovs(used_molotovs) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_molotovs ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 5) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 5), true);
    },

    get used_napalm() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 6);
    },
    set used_napalm(used_napalm) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_napalm ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 6) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 6), true);
    },

    get used_flamethrower() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 7);
    },
    set used_flamethrower(used_flamethrower) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_flamethrower ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 7) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 7), true);
    },

    get used_proximity_mines() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 8);
    },
    set used_proximity_mines(used_proximity_mines) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_proximity_mines ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 8) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 8), true);
    },

    get used_timed_mines() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 9);
    },
    set used_timed_mines(used_timed_mines) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_timed_mines ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 9) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 9), true);
    },

    get used_remote_mines() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 10);
    },
    set used_remote_mines(used_remote_mines) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_remote_mines ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 10) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 10), true);
    },

    get used_shrapnel_mines() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 11);
    },
    set used_shrapnel_mines(used_shrapnel_mines) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_shrapnel_mines ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 11) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 11), true);
    },

    get used_homing_missiles() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 12);
    },
    set used_homing_missiles(used_homing_missiles) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_homing_missiles ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 12) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 12), true);
    },

    get used_assault_rifle() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 13);
    },
    set used_assault_rifle(used_assault_rifle) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_assault_rifle ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 13) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 13), true);
    },

    get used_deathwad() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 14);
    },
    set used_deathwad(used_deathwad) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_deathwad ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 14) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 14), true);
    },

    get used_cheats() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 15);
    },
    set used_cheats(used_cheats) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, used_cheats ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 15) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 15), true);
    },

    get killed_everything() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 16);
    },
    set killed_everything(killed_everything) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, killed_everything ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 16) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 16), true);
    },

    get killed_hostiles_only() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 17);
    },
    set killed_hostiles_only(killed_hostiles_only) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, killed_hostiles_only ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 17) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 17), true);
    },

    get hardest_difficulty() {
        return new DataView(this.data.buffer, 50, 4).getUint32(0, true) & (1 << 18);
    },
    set hardest_difficulty(hardest_difficulty) {
        new DataView(this.data.buffer, 50, 4).setUint32(0, hardest_difficulty ? new DataView(this.data.buffer, 50, 4).getUint32(0, true) | (1 << 18) : new DataView(this.data.buffer, 50, 4).getUint32(0, true) & ~(1 << 18), true);
    },

    get time_ms() {
        return new DataView(this.data.buffer, 54, 4).getUint32(0, true);
    },
    set time_ms(time_ms) {
        new DataView(this.data.buffer, 54, 4).setUint32(0, time_ms, true);
    }
}

function start() {
    document.body.addEventListener("click", function (event) {
        handleInput(event.target);
    });
    document.body.addEventListener("change", function (event) {
        handleInput(event.target);
    });
    document.getElementById("loaded_save").addEventListener("change", load);

    updateUi();
}

function load() {
    var reader = new FileReader();
    reader.onload = function () {
        saveFile.data = new Uint8Array(this.result);

        updateUi();
    };

    reader.readAsArrayBuffer(this.files[0]);
}

function handleInput(target) {
    var id = target.id.toLowerCase();

    if (id in saveFile)
        if (target.type.toLowerCase() == "checkbox") {
            saveFile[id] = target.checked;
        }
        else
            if (id == "level")
                saveFile[id] = target.value - 1;
            else
                saveFile[id] = target.value;

    if (id.includes("all"))
        setEveryChildCheckbox(target.checked, id.replace("_all", ""));

    if (id == "download_save")
        download();

    switch (id) {
        case "maximise_character":
            saveFile.health_real = 1000;
            saveFile.armor_real = 100;
            break;
        case "maximise_ammo":
            saveFile.grenades = 10;
            saveFile.molotovs = 10;
            saveFile.missiles = 5;
            saveFile.napalm = 5;
            saveFile.shotgun_ammo = 50;
            saveFile.fuel_real = 250;
            saveFile.mines = 5;
            saveFile.homing_missiles = 5;
            break;
        case "maximise_ammo_backpack":
            saveFile.unlocked_backpack = true;
            saveFile.grenades = 20;
            saveFile.molotovs = 20;
            saveFile.missiles = 15;
            saveFile.napalm = 15;
            saveFile.shotgun_ammo = 100;
            saveFile.fuel_real = 500;
            saveFile.mines = 10;
            saveFile.homing_missiles = 15;
            break;
        case "health_in-game": saveFile.health_real = target.value * 5; break;
        case "armor_in-game": saveFile.armor_real = target.value * 5; break;
        case "fuel_in-game": saveFile.fuel_real = Math.ceil(target.value * 2.5); break;
    }

    updateUi();
}

function setEveryChildCheckbox(value, parent) {
    var children = document.getElementById(parent).getElementsByTagName("input");
    for (var i = 1; i < children.length; ++i)
        if (children[i].type.toLowerCase() == "checkbox")
            if (children[i].checked != value)
                children[i].click();
}

function updateUi() {
    var properties = Object.getOwnPropertyNames(saveFile);
    for (var i = 1; i < properties.length; ++i) {
        var input = document.getElementById(properties[i]);
        if (input.type.toLowerCase() == "checkbox")
            input.checked = saveFile[properties[i]];
        else {
            input.value = saveFile[properties[i]];

            switch (input.id.toLocaleLowerCase()) {
                case "health_real": document.getElementById("health_in-game").value = Math.floor(input.value / 5); break;
                case "armor_real": document.getElementById("armor_in-game").value = Math.floor(input.value / 5); break;
                case "fuel_real": document.getElementById("fuel_in-game").value = Math.floor(input.value / 2.5); break;
                case "level": input.value = saveFile[properties[i]] + 1;
            }
        }
    }

    var selectAllCheckboxes = [
        "unlocked_all",
        "achieved_all",
        "used_all",
        "unlocked_all_obselete",
        "achieved_all_obselete",
        "used_all_obselete"
    ];

    selectAllCheckboxes.forEach(function (id) {
        document.getElementById(id).checked = checkIfAllCheckboxesChecked(id);
    })
}

function checkIfAllCheckboxesChecked(id) {
    var checkboxes = document.getElementById(id).parentElement.getElementsByTagName("input");
    for (var i = 1; i < checkboxes.length; ++i)
        if (checkboxes[i].type.toLowerCase() == "checkbox")
            if (checkboxes[i].checked != true)
                return false;

    return true;
}

function download() {
    var textFileAsBlob = new Blob([saveFile.data]);

    var downloadLink = document.createElement("a");

    downloadLink.download = document.getElementById("save_number").value.toString() + ".gme";
    downloadLink.innerHTML = "Download File";

    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
}