export const characters = [
    {
        id: 1,
        title: "Albedo",
        body: "Альбедо",
        fullname: "Альбедо",
        birthday: "13 сентября",
        weapon_type: "sword",
        rarity: "legendary",
        element: "geo",
        el_name: "Гео",
        gender: "Мужской",
        sp_food: "«Лесной сон»",
        w_type: "Меч",
        constellation: "Меловой Принцепс",
        w_get: "Молитва",
        sp_stat: "Бонус Гео Урона",
        describe: "Альбедо - Гений именуемый Принцом мела. Является отличным ",
        stories: [
            {
                id: 1,
                title: "История персонажа 1",
                body: "1"
            },
            {
                id: 2,
                title: "История персонажа 2",
                body: "2"
            },
            {
                id: 3,
                title: "История персонажа 3",
                body: "3"
            },
            {
                id: 4,
                title: "История персонажа 4",
                body: "4"
            },
            {
                id: 5,
                title: "История персонажа 5",
                body: "5"
            },
            {
                id: 6,
                title: "Рисунки Альбедо",
                body: "6"
            },
            {
                id: 7,
                title: "Глаз Бога",
                body: "7"
            }
        ],
        stats: [
            {
                id: 1,
                phase: 0,
                lvl_s: 1,
                lvl_e: 20,
                hp_s: 1030,
                hp_e: 2671,
                atk_s: 20,
                atk_e: 51,
                def_s: 68,
                def_e: 177,
                sp_stat: "0%",
                materials: [
                    {
                        material: "prithiva topaz sliver",
                        material_rar: "common",
                        number: "x1"
                    },
                    {
                        material: "cecilia",
                        material_rar: "trash",
                        number: "x3"
                    },
                    {
                        material: "divining scroll",
                        material_rar: "trash",
                        number: "x3"
                    },
                    {
                        material: "mora",
                        material_rar: "rare",
                        number: "x20000"
                    }
                ]
            }
        ],
        skills: [
            {
                id: 1,
                tab_id: "first",
                title: "Фехтовальный стиль Фавония: Мел",
                icon: require(`./assets/images/characters/Albedo/attacks.png`),
                body: [
                    {
                    title: 'Обычная атака:',
                    body: 'До пяти быстрых ударов мечом.'
                    },
                    {
                        title: 'Заряженная атака:',
                        body: 'Два быстрых взмаха мечом, для которых тратится определённое количество выносливости.'
                    },
                    {
                        title: 'Атака в падении:',
                        body: 'Стремительно падает на землю, атакуя всех врагов на пути.\nПриземлившись, наносит урон по площади.'
                    }
                ],
                link: require("./assets/images/characters/Albedo/Фехтовальный стиль Фавония_ Мел.mp4")
            }
        ]
    }
]
