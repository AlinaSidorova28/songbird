const birdsData = [
  [
    // разминка
    {
      id: 1,
      name: 'Колибри',
      species: 'Trochilidae',
      description: 'Колибри — самые маленькие птицы на Земле. Сердце колибри занимает больше трети объема их тела и делает 500-1000 ударов в минуту. Колибри — единственная птица, которая умеет летать задом наперёд или вверх ногами.',
      image: 'https://live.staticflickr.com//65535//50156669873_043ca4d924.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/IDGMGECBVN/XC564889-MEVI_SierraChincua_Angangueo_Michoacan_Song_21feb20.mp3',
    },
    {
      id: 2,
      name: 'Белый аист',
      species: 'Ciconia ciconia',
      description: 'Размах крыльев белого аиста может достигать двух метров. Аисты общаются между собой, шипя и щёлкая клювом, так как они не могут «произносить» никаких звуков, кроме тихого писка, из-за особенностей своего строения.',
      image: 'https://live.staticflickr.com//65535//50154612621_84dc95a8ec.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/LNDCYHUSPR/XC527477-12%20feb.%2013.35%20cig%C3%BCe%C3%B1as.mp3',
    },
    {
      id: 3,
      name: 'Чибис',
      species: 'Vanellus vanellus',
      description: ' В случае тревоги чибис взлетает с часто повторяемым криком «чьи-вы, чьи-вы». Полет чибисов весьма характерен. Шумно взмахивая крыльями, птицы круто поднимаются вверх, затем опускаются вниз, летают, качаясь из стороны в сторону, описывая в это время глубоко волнистую линию.',
      image: 'https://live.staticflickr.com//65535//50156039057_b5757fc780.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC566232-Tofsvipa_03.mp3',
    },
    {
      id: 4,
      name: 'Фламинго',
      species: 'Phoenicopterus',
      description: 'Свое название птицы получили от латинского слова flamenco — «огонь», которое указывает на их яркий цвет. Мало того, что фламинго едят песок и грязь из воды, они еще и не дышат за трапезой.',
      image: 'https://live.staticflickr.com//65535//50025697642_4c2f27e066.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YESYDXYEZD/XC569452-flamant_rose_salins.mp3',
    },
    {
      id: 5,
      name: 'Лазоревка',
      species: 'Cyanistes caeruleus',
      description: 'Иногда лазоревки выклёвывают оконную замазку или влетают в комнату и отрывают кусочки обоев, которыми потом выстилают гнёзда. Лазоревки гнездуются в дуплах, диаметр входа которых не превышает 3,5 см. Однако гнездо с яйцами, птенцами и самкой часто опустошает ласка.',
      image: 'https://live.staticflickr.com//65535//50121764976_477302555d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC568874-SNI-303_01-13062020-BL%C3%85MEIS-CALL-STRBKT.mp3',
    },
    {
      id: 6,
      name: 'Глупыш',
      species: 'Fulmarus glacialis',
      description: 'Глупыши – долгожители среди птиц, их продолжительность жизни достигает 40-50 лет. Взрослая особь издает низкий трубный гогот, иногда похожий на каркающий крик.',
      image: 'https://live.staticflickr.com//65535//50098037453_a27805db4b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487674-2018-07-16%20Rif%20Onverdarnes%20grundafjordur%20180716%20Goeland%20bourgmestre%20et%20fulmar%20boreal%20%281%29.mp3',
    },
  ],
  [
    // воробьиные
    {
      id: 1,
      name: 'Рыжеухий бюльбюль',
      species: 'Hypsipetes amaurotis',
      description: 'Пение рыжеухого бюльбюля громкое, щебечущее. Летом птицы питаются в основном насекомыми, осенью и зимой плодами и семенами, поэтому в Японии вид считают сельскохозяйственным вредителем.',
      image: 'https://live.staticflickr.com//65535//49651980322_e8ce98da0d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RVLNPQSYVW/XC571414-200518_%28brown-eared%20bulbul%29.mp3',
    },
    {
      id: 2,
      name: 'Жулан',
      species: 'Lanius collurio',
      description: 'Жулан относится к плотоядным птицам, может охотиться на мышей. При охоте на жертву, он предпочитает сидеть в засаде. Жулан способен пародировать голоса других птиц.',
      image: 'https://live.staticflickr.com//65535//50156285426_e3d06555e9.jpg',
      audio: 'https://www.xeno-canto.org/api/2/recordings?query=Lanius%20collurio',
    },
    {
      id: 3,
      name: 'Вьюрок',
      species: 'Fringilla montifringilla',
      description: 'Вьюрки способны менять свою расцветку, в зависимости от сезона. Пернатые этого рода варьируются от мирных до хищников, которые питаются кровью других животных.',
      image: 'https://live.staticflickr.com//65535//50109074403_7f7602a5c8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MNQLBOLQFS/XC571294-BergfinkS_Luspebryggan_Juni2020_200613-064109.mp3',
    },
    {
      id: 4,
      name: 'Королек',
      species: 'Regulus',
      description: 'Королек — самая маленькая певчая птичка в Европе, России и Азии. Он получил свое прозвище не только из-за хохолка в виде короны. По легенде он принимал участие в соревновании птиц, кто из них ближе всех подлетит к Солнцу. Королёк, спрятавшись под крылом орла, взлетел выше него и победил, но из-за маленького размера его не могли назвать королём, а стали звать корольком.',
      image: 'https://live.staticflickr.com//65535//50118916236_b90826c51f.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC575455-REGREG110720-T014%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Лирохвост',
      species: 'Menura',
      description: 'Лирохвосты или птицы-лиры обладают превосходной способностью имитировать не только природные, но и искусственные звуки окружающей среды, такие как автомобильный сигнал, электронные игрушки, скрип двери или звук бензопилы..',
      image: 'https://live.staticflickr.com//65535//49985424623_23a7ac9935.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/Alberts-Lyrebird.mp3',
    },
    {
      id: 6,
      name: 'Птица-кошка',
      species: 'Ailuroedus crassirostris',
      description: 'Птица-кошка или кошачий пересмешник активен днём, скрываясь в кустарнике. Обычно он летает только на короткие дистанции от ветви к ветви, избегая перелёты над открытой местностью. Птица подражает крикам других певчих птиц, а также «мяукает».',
      image: 'https://live.staticflickr.com//65535//49292339678_486073f12f.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MXMFTGKZDR/XC331655-GMCLAC_1114-GreenCatbird.mp3',
    },
  ],
  [
    // певчие
    {
      id: 1,
      name: 'Горихвостка',
      species: 'Phoenicurus phoenicurus',
      description: 'Горихвостки поют практически круглые сутки, особенно активны рано утром и поздно вечером. Кукушки часто оставляют свои яйца в гнезде горихвостки, которые заботятся о них как о собственных.',
      image: 'https://live.staticflickr.com//65535//50110948753_5ca7b71fe5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDXDGURYIO/XC571312-Codirosso%20comune%2024.6.2020.mp3',
    },
    {
      id: 2,
      name: 'Овсянка',
      species: 'Emberiza citrinella',
      description: 'Прежде чем подкрепиться растительной пищей, овсянка заглатывает несколько мелких камешков, которые, словно жернова, перетирают зерна в желудке. Эта малькая птичка очень вынослива в плане пения и может без остановки петь до 12 часов кряду, исполнив за этот период примерно 4320 песен.',
      image: 'https://live.staticflickr.com//65535//50107267608_7531b9744b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC575223-200712_2533%201412%20Goldammer.%20D%2C%20NW%2C%20GL%2C%20Benninghausen.%20Stephan%20Risch.mp3',
    },
    {
      id: 3,
      name: 'Снегирь',
      species: 'Pyrrhula pyrrhula',
      description: 'Летом и весной снегири добавляют в свое меню яичную скорлупу, глину, мел, кузнечиков и мучных червей. Когда снегири едят ягоды, они вытаскивают и съедают семена, оставляя мякоть. Главная опасность, подстерегающая снегиря при жизни в неволе — риск ожирения. Эти птицы совершенно не знают меры в еде.',
      image: 'https://live.staticflickr.com//65535//50141499356_f365c4b767.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485197-Bouvreuil%20du%20Baikal.mp3',
    },
    {
      id: 4,
      name: 'Трясогузка',
      species: 'Motacilla',
      description: 'эти птицы трясут своим хвостиком на бегу для балансировки, когда охотятся на проворных насекомых. Увидев своё отражение в окошке, стекле, трясогузки могут начать атаковать самих себя. Белая трясогузка нередко садится на спины пасущихся домашних животных и собирает с них насекомых.',
      image: 'https://live.staticflickr.com/65535/48121572537_74a5b62e4b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/NXWSPUOOMQ/XC568737-ZOOM0005_Tr1.mp3',
    },
    {
      id: 5,
      name: 'Чиж',
      species: 'Spinus spinus',
      description: 'Чижи – птицы, которые мастерски умеют прятаться и маскироваться. В естественных условиях они настолько тщательно маскируют свои гнезда, что найти их становится просто невозможно.',
      image: 'https://live.staticflickr.com//65535//49933803147_2d40905af2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MDZVOPUOXU/XC483003-190615_11.lawrences.goldfinch.big.rock.creek.cg.lance.benner.mp3',
    },
    {
      id: 6,
      name: 'Пересмешник',
      species: 'Mimus polyglottos',
      description: 'В «репертуаре» птички-пересмешника до двух сотен песен. Птица способна запомнить и с точностью воспроизвести звуки других птиц, зверей, природных явлений, таких как эхо, и даже способна повторить голос человека. Пересмешник реагирует и на искусственные звуки, которые также повторяет с невероятной точностью.',
      image: 'https://live.staticflickr.com//65535//50135821302_d71a8f3385.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OCGLDSUVRE/XC559555-Northern%20Mockingbird%20Mimus%20polyglottos%20%20C%20Canal%2C%20Inyo%20Co.%20CA%205-15-2020.mp3',
    },
  ],
  [
    // попугаи
    {
      id: 1,
      name: 'Неразлучник',
      species: 'Agapornis',
      description: 'Несмотря на красивую легенду, неразлучники могут жить одни. Если даже у птицы умер партнер, к ней (или ему) можно подсаживать другого, образуется новая пара. Хотя в природе эти птицы действительно демонстрируют верность. Англичане называют этих попугаев «love birds», т.е. «влюбленные птицы».',
      image: 'https://live.staticflickr.com//65535//48680825508_b7d553e9e3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC299934-LS_59888%20Black-winged%20Lovebird%20calls%20A.mp3',
    },
    {
      id: 2,
      name: 'Корелла',
      species: 'Nymphicus hollandicus',
      description: 'Согласно многочисленным исследованиям, кореллы состоят в десятке наиболее умных домашних птиц. При хорошем содержании и постоянных тренировках они способны разучить до 300 слов. Их интеллект аналогичен интеллекту 3-4-х летнего ребенка.',
      image: 'https://live.staticflickr.com//7905//46280724644_66d109cff7.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC165448-Cockatiel.mp3',
    },
    {
      id: 3,
      name: 'Жако',
      species: 'Psittacus erithacus',
      description: 'Самой умной породой попугаев считается жако — эти птицы способны запоминать более тысячи слов. Также установлено, что они могут ассоциировать определённые слова с предметами.',
      image: 'https://live.staticflickr.com//1754//27945122877_d23fd65873.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CJQNNUYOQE/XC492353-rc%20108%20P.erithacus%20flock%20edited.mp3',
    },
    {
      id: 4,
      name: 'Гиацинтовый ара',
      species: 'Anodorhynchus hyacinthinus',
      description: 'Гиацинтовые ара являются самыми длинными, дорогими и громкими. В длину птица может достигать двух метров, половина из которых припадает на хвост. Ара так голосисты, что их крик слышен более чем на полтора километра.',
      image: 'https://live.staticflickr.com//65535//50143238883_ccdfe7384d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VWTHZYEYYB/XC494928-jacintos%202.mp3',
    },
    {
      id: 5,
      name: 'Кеа',
      species: 'Nestor notabilis',
      description: 'Кеа удивительны тем, что, в отличие от прочих своих сородичей, едят мясо и падаль. А ещё эти хищники охотятся на овец. Кеа чрезвычайно любопытны и любят разбирать рюкзаки туристов, а также кувыркаться в грязных лужах.',
      image: 'https://live.staticflickr.com/65535/49955467881_c5100cb84b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC405529-180129_0139_kea.mp3',
    },
    {
      id: 6,
      name: 'Певчий попугай',
      species: 'Psephotus haematonotus',
      description: 'Свое название эти птицы получили за красивый мелодичный голос, схожий с трелями наших лесных птиц. Правда этой способностью обладают лишь самцы. Самочки только перекликаются, издавая своеобразные различные свисты.',
      image: 'https://live.staticflickr.com/65535/49092375846_60fcda8f8e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC578571-Parrot_Red-rumped_TELM3AK-579_Pilliga_063020.mp3',
    },
  ],
  [
    // хищные
    {
      id: 1,
      name: 'Кобчик',
      species: 'Falco vespertinus',
      description: 'Кобчики могут нападать на цаплю, но не как на добычу для питания, а для того, чтобы отобрать у цапли гнездо. У этих маленьких соколов мирный покладистый характер, их легко приручить, но так как они очень любят летать, то могут улететь от хозяина.',
      image: 'https://live.staticflickr.com/4185/34090570740_4529213388.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC493725-Falco%20vespertinus%20190821_001%2CAAAA%20alarm%20female%20call.MP3',
    },
    {
      id: 2,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description: 'Сапсан – самый быстрый представитель земной фауны. Во время охоты он развивает скорость до 322 км/ч, пикируя на добычу. Ученые подсчитали, что примерно пятая часть всех земных птиц становится добычей сапсанов.',
      image: 'https://live.staticflickr.com/65535/49923153486_32e91b7873.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC571136-Pilgrimsfalk_12.mp3',
    },
    {
      id: 3,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Беркут настолько сильный, что может утащить в гнездо телёнка. У беркута превосходное зрение. Выражается это не только в том, что он может разглядеть добычу на расстоянии 4 километров. У беркутов цветное зрение. Это большая редкость в животном мире.',
      image: 'https://live.staticflickr.com/7899/40397060033_574dda6a19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC572763-Kungs%C3%B6rn_05.mp3',
    },
    {
      id: 4,
      name: 'Змееяд',
      species: 'Circaetus gallicus',
      description: 'Змееяды питаются только змеями (в основном ужами), оттуда и название. В кладке обычно одно белое яйцо (в исключительных случаях до 2-х яиц, но во втором яйце эмбрион всегда погибает, т.к. его насиживание прекращается после вылупления птенца из первого яйца).',
      image: 'https://live.staticflickr.com/65535/49054805903_9fa02cd543.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC366048-call3.mp3',
    },
    {
      id: 5,
      name: 'Белоголовый орлан',
      species: 'Haliaeetus leucocephalus',
      description: 'Самое большое гнездо, когда-либо построенное животным на дереве, было сделано белоголовым орланом. Оно было 4 метра глубиной, 2,5 метра шириной и весило одну тонну. Индейцы считают, что орланы — духовные посланники между богом и человеком.',
      image: 'https://live.staticflickr.com/7881/33613121268_3298ca6bb9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC408110-Bald%20Eagle%202%20perched%20nest%20area%20-FL%2C%20River%20Lakes%2C%20March%2030%2C%202018%2C%200626%20AM.mp3',
    },
    {
      id: 6,
      name: 'Скопа',
      species: 'Pandion haliaetus',
      description: 'Несмотря на то, что скопа относится к хищным видам, питается она исключительно рыбой. Скопу можно сравнить с собакой. Она отряхивает воду с перьев выкручивающими движениями головы и тела, причём делает это птица прямо на лету.',
      image: 'https://live.staticflickr.com/65535/49745344391_321d93c3bb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/FFFADKCCII/XC572167-1801D12.mp3',
    },
  ],
  [
    // водоплавающие
    {
      id: 1,
      name: 'Белый гусь',
      species: 'Anser caerulescens',
      description: 'Маленькие гусята способны плавать уже спустя сутки после рождения. Гусиные перья покрыты жиром, а потому вода с них попросту скатывается. Во время линьки птицы теряют маховое оперение, из-за чего на протяжении 1.5 месяцев не могут летать.',
      image: 'https://live.staticflickr.com/7888/47041904932_22e7dc3d42.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC481272-SNGO_2019-01-01_Rentenarr_Rd_Sauvie_Island_OR_1523.mp3',
    },
    {
      id: 2,
      name: 'Гагара',
      species: 'Gavia',
      description: 'В давние времена люди верили, что стаи летящих гагар оберегают души умерших. Через два дня после рождения птенцы гагары уже умеют нырять. Гагары могут нырять на глубину до 50 метров.',
      image: 'https://live.staticflickr.com/4226/35287979395_2cafa4d5f5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BBJSEFYVPV/XC576931-Red%20T%20Diver%2017%20July.mp3',
    },
    {
      id: 3,
      name: 'Чомга',
      species: 'Podiceps cristatus',
      description: 'Чомги время от времени едят собственные перья, так защищая свою пищеварительную систему от повреждений, которые могут произойти от костей рыбы. Гнездо у чомг плавучее с углублением для яиц. Яйца поганок дополнительно подогреваются газами, которые образуются в процессе разложения растительности.',
      image: 'https://live.staticflickr.com/65535/50127890398_e58bdf3378.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CFWBADTLKU/XC475576-Gr%C3%A8be%20hupp%C3%A9.mp3',
    },
    {
      id: 4,
      name: 'Баклан',
      species: 'Phalacrocorax',
      description: 'Бакланы машут крыльями не только в полёте. В воде они двигают ими так же, как в воздухе. Кроме них, этот способ плавания освоили только пингвины. Бакланы образуют поистине огромные колонии. Те, которые живут в лесах, когда улетают, оставляют столько помёта, что вся растительность гибнет.',
      image: 'https://live.staticflickr.com/65535/49940837591_e2487f47df.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC578261-200713_01T1_K_XC.mp3',
    },
    {
      id: 5,
      name: 'Тупик',
      species: 'Fratercula arctica',
      description: 'Перья тупиков водоотталкивающие, и они могут пить соленую воду. Чтобы взлететь, птице приходится кидаться вниз с отвесного утёса, и уже в воздухе махая крыльями, набирать высоту. Клюв тупика меняет цвет в течение года. Зимой он тускло-серого цвета, а весной цветет ярким апельсином.',
      image: 'https://live.staticflickr.com/65535/49130458906_2096d68d36.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/DREKKBLICT/XC500860-puffin1cy%20The%20Hague%2004102019%20VvdS.mp3',
    },
    {
      id: 6,
      name: 'Белая цапля',
      species: 'Ardea alba',
      description: 'На одной ноге цапля может неподвижно простоять несколько часов. Прижимая ногу к телу, цапля согревает ее после холодной воды. Жёлтый клюв взрослых особей белой цапли в брачный период окрашивается в чёрный цвет, сохраняя желтизну только у основания.',
      image: 'https://live.staticflickr.com/65535/49173173757_5cc02eaaa3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TJSRKPHQNP/XC515993-191204_0148.mp3',
    },
  ],
];

export default birdsData;
