import React, { useState } from 'react';
import speImage from '../images/spe-1.png'
import carImage from '../images/car.png';
import tshortImage from '../images/10baset1s.jpeg';
import aplImage from '../images/apl.png';
import { Col, Row, Container, Tab, ListGroup, Image, Modal } from 'react-bootstrap';
function MainContent() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleItemClick = (event) => {
        event.preventDefault(); 
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <div className='min-vh-100 text-left bg-light fs-4 d-flex align-items-center h-100 flex-grow-1' id='spe'>
                <Container className='py-5'>
                    <Row className='justify-content-center'>
                    <Col md={5} className='text-justify mb-3 mb-md-3'>
                            Single Pair Ethernet je komunikačný a prenosový štandard, ktorý umožňuje prenos dát prostredníctvom jediného páru medených vodičov.
                            Tento pár vodičov môže byť kategórie 5e, 6 alebo 6A, čo znamená, že gigabitový Single Pair Ethernet (SPE) využíva existujúcu inštalovanú infraštruktúru Ethernetu.
                            Rozvoj tohto štandardu umožňuje prenos dát na rýchlostiach až do 1 Gbps, čo ho robí vhodným pre mnoho moderných aplikácií.
                        </Col>
                        <Col md={1}></Col>
                        <Col md={6} >
                            <h1 className='text-center mb-3'>Výhody SPE</h1>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#reduction" >
                                <Row>
                                    <Col md={5} className='mb-3 mb-md-0'>
                                        <ListGroup>
                                            <ListGroup.Item action href="#reduction" onClick={handleItemClick}>
                                                Redukcia nákladov
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#universality" onClick={handleItemClick}>
                                                Univerzálnosť
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#speed" onClick={handleItemClick}>
                                                Rýchlosť a spoľahlivosť
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#compatibilty" onClick={handleItemClick}>
                                                Kompatibilita
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>

                                    <Col md={7} >
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#reduction">
                                                <p>SPE umožňuje výrazné znižovanie nákladov na inštalácie a údržbu sietí.</p>
                                                <p>Jedna krútená dvojlinka vodičov znamená nižšie náklady na materiál a pracovnú silu.</p></Tab.Pane>
                                            <Tab.Pane eventKey="#universality">
                                                <p>SPE je univerzálny štandard vhodný pre rôzne aplikácie.</p>
                                                <p>Použiteľný v priemyselnej automatizácii, telekomunikáciách, výrobe automobilov a ďalších
                                                    odvetviach.</p></Tab.Pane>
                                            <Tab.Pane eventKey="#speed">
                                                <p>Poskytuje vysokú rýchlosť pre prenos dát a spoľahlivosť.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#compatibilty">
                                                <p>Postavený na existujúcich Ethernetových technológiách.</p>
                                                <p>Kompatibilný s existujúcimi sieťovými infraštruktúrami, umožňuje plynulý prechod na SPE bez
                                                    výmeny zariadení.</p></Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Image className='image spe-image' src={speImage} fluid onClick={() => handleImageClick(speImage)}></Image>

                        <Modal show={showModal} onHide={handleCloseModal} centered>
                            <Modal.Body>
                                <Image src={selectedImage} fluid />
                            </Modal.Body>
                        </Modal>


                    </Row>



                </Container>
            </div>

            <div className='min-vh-100 bg-primary text-light d-flex align-items-center justify-content-center h-100 flex-grow-1' id='mspe'>
                <Container className='pt-5 fs-5'>
                    <h1 className='text-center'>100 Megabitový Single Pair Ethenet</h1>

                    <p>
                        V kontexte Megabitového štandardu SPE 100BaseT1 sa automobilové elektrické
                        systémy stávajú čoraz komplexnejšími, s narastajúcim počtom elektronických riadiacich
                        jednotiek (ECU) implementovaných v vozidlách. Tieto ECU v reálnom čase zdieľajú
                        široké spektrum dát, čím rastie dopyt po šírke pásma.
                    </p>
                    <p>
                        Na riešenie tohto problému so šírkou pásma sa automobilové spoločnosti spojili s
                        poprednými výrobcami integrovaných obvodov (IC) a vývojármi systémov s cieľom
                        vytvoriť nový štandard Ethernetu prispôsobený komunikačným sieťam v automobiloch.
                        Inštitút pre elektrotechniku a elektroniku (IEEE) 802.3bw štandard, známy aj ako
                        100BaseT1 (predtým BroadR-Reach), je 100 Mbps automobilový Ethernetový štandard,
                        ktorý bol navrhnutý s cieľom zvýšiť priepustnosť dát, splniť prísne emisné normy pre
                        automobily a znížiť hmotnosť a náklady na káblovanie v automobilových sieťach.
                        Tým, že využíva princípy superpozície a konkrétne kódovacie a kódovacie postupy,
                        100BaseT1 účinne znižuje elektromagnetické rušenie (EMI), hmotnosť káblov, náklady a
                        fyzickú veľkosť káblov v porovnaní so štandardmi Ethernetu, ako sú 10BaseT a
                        100BaseTX.
                    </p>
                    <p>
                        S postupným nárastom komplexnosti elektrických systémov v vozidlách, ktorý je
                        predovšetkým ovplyvnený pokrokom v oblasti multimediálneho zážitku, pokročilých
                        asistenčných systémov pre vodičov , pohonných jednotiek a elektroniky vozidiel, sa stáva
                        stále zrejmejším, že tieto systémy vyžadujú rýchlejšie komunikačné siete. Je potrebné
                        zvládať vysoký objem dát a spracovávať firmvér/softvér v reálnom čase, pričom tieto
                        úlohy sú rozdelené a zdieľané medzi rôznymi ECU v súčasných vozidlách. 20.
                        IEEE 802.3bw (100BaseT1) je nový fyzický komunikačný protokol (PHY), ktorý bol
                        vyvinutý automobilovými spoločnosťami spolu s poprednými výrobcami IC a vývojármi
                        systémov. 100BaseT1 poskytuje praktické riešenie pre zvládnutie vyšších nárokov na šírku
                        pámda pri rýchlosti komunikácie 100 Mbps cez neuzemnený SPE vodič. 100BaseT1
                        účinne znižuje EMI, hmotnosť káblov, náklady a fyzickú veľkosť káblov v porovnaní s
                        5
                        tradičnými riešeniami Fast Ethernet (100BaseTX).
                    </p>

                </Container>

            </div>

            <div className='min-vh-100 bg-light d-flex align-items-center justify-content-center h-100 flex-grow-1' id='gspe'>
                <Container className='pt-5 fs-5'>
                    <h1 className='text-center'>Gigabitový Single Pair Ethernet</h1>

                    <Row className='d-flex align-items-center'>
                        <Col md={6}>
                            <Image className='image border-2 border-dark' src={carImage} fluid onClick={() => handleImageClick(carImage)}></Image>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <p>
                                Tento štandard je definovaný IEEE a určuje rozhranie Ethernetu 1000Base-T1, ktoré
                                umožňuje prenos dát rýchlosťou 1000 megabitov za sekundu cez jediný dvojvodičový
                                tkaný káblový pár. V porovnaní so štandardnými LAN káblami, ako sú Cat-5, Cat-6 alebo
                                Cat-7, sú káble 1000Base-T1 ľahšie, tenšie, cenovo dostupnejšie a jednoduchšie sa
                                pokladať vďaka menším možným polomerom ohýbania, podobne ako pri každom SPE.
                            </p>
                            <p>
                                1000Base-T1 pracuje v režime plného duplexu, kde sa vysielacie a prijímacie signály
                                sú simultánne prenášané v opačných smeroch cez jediný káblový pár. Ďalšie vlastnosti
                                1000Base-T1 sú v súlade s klasickým Ethernetom.
                            </p>
                            <p>
                                Maximálna dosiahnuteľná vzdialenosť
                                závisí od tieniacej schopnosti káblov a môže byť 15 alebo 40 metrov. Pre napájanie
                                zariadení cez eternetové pripojenie je k dispozícii Power over Data Line (PoDL, 802.3bu).
                                Power over Data Line dovoľuje výkony až do 50 wattov na strane koncového zariadenia.
                            </p>
                        </Col>
                    </Row>


                </Container>

                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Body>
                        <Image src={selectedImage} fluid />
                    </Modal.Body>
                </Modal>

            </div>

            <div className='min-vh-100 bg-primary fs-4 d-flex align-items-center h-100 flex-grow-1 text-light' id='tshort'>
                <Container className='py-5'>
                    <h1 className='text-center'>10BASE-T1S</h1>
                    <Row className='justify-content-center'>
                        <Col md={12} className='text-justify mb-3 mb-md-3'>
                            <p>
                                10BASE-T1S predstavuje technológiu, ktorá umožňuje rozšírenie Eternetových sietí
                                až k okrajom operačnej technológie a informačnej technológie. Táto technológia má
                                významné výhody, najmä v automobilovom priemysle, dokonca aj v prípade, keď sieť
                                obsahuje nekompatibilné zariadenia a rôzne fyzické prvky. Štandard IEEE definoval
                                10BASE-T1S ako technológiu, ktorá poskytuje 10 Mbps prenosový kanál s viacerými
                                uzlami, pričom každý uzol môže obsahovať aspoň osem uzlov. Tieto uzly sú pripojené k
                                spoločnému miešaciemu segmentu s minimálnou dĺžkou 25 m. Je dôležité poznamenať, že
                                limity špecifikované štandardom IEEE sú v skutočnosti "minimálnymi maximami", čo
                                umožňuje pripojenie viac ako osem uzlov a prenos na väčšie vzdialenosti.
                            </p>
                            <p>
                                Táto technológia podporuje štandardnú Ethernetov komunikáciu, eliminujúc potrebu
                                brán na pripojenie nekompatibilných komunikačných systémov. 10BASE-T1S zároveň
                                znižuje celkové náklady na systém vďaka využívaniu jednej dvojice drôtov a architektúre s
                                viacerými uzlami. Navyše umožňuje lepšiu škálovateľnosť systému, pretože viaceré uzly
                                môžu fungovať na rovnakej linke s vysokou priepustnosťou dát. To znamená, že systém
                                potrebuje menej portov spínača, káblov a ďalších zariadení.
                            </p>
                        </Col>
                        <Col md={6} className='flex-fill'>
                            <Image src={tshortImage} className=' image mb-2 border border-3 border-dark' fluid onClick={() => handleImageClick(tshortImage)}></Image>
                        </Col>


                        <Modal show={showModal} onHide={handleCloseModal} centered>
                            <Modal.Body>
                                <Image src={selectedImage} fluid />
                            </Modal.Body>
                        </Modal>


                        <Col md={6} className='fs-5 bg-light text-dark border-radius rounded pb-3 flex-fill'>
                            <h2 className='text-center mb-3'>Výhody SPE</h2>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#reduction" >
                                <Row>
                                    <Col md={5} className='mb-3 mb-md-0'>
                                        <ListGroup className='small-text'>
                                            <ListGroup.Item action className="py-1 small" href="#minimalize" onClick={handleItemClick}>

                                                Minimalizované riziko
                                            </ListGroup.Item>
                                            <ListGroup.Item action className="py-1 small" href="#optimilize" onClick={handleItemClick}>
                                                Optimalizovaná šírka pásma
                                            </ListGroup.Item>
                                            <ListGroup.Item action className="py-1 small" href="#automotive" onClick={handleItemClick}>
                                                Podpora pre Ethernet v vozidle
                                            </ListGroup.Item>
                                            <ListGroup.Item action className="py-1 small" href="#multidrop" onClick={handleItemClick}>
                                                Multidrop topológia
                                            </ListGroup.Item>
                                            <ListGroup.Item action className="py-1 small" href="#flexibility" onClick={handleItemClick}>
                                                Škálovateľnosť a flexibilita
                                            </ListGroup.Item>
                                            <ListGroup.Item action className="py-1 small" href="#power" onClick={handleItemClick}>
                                                Power Over Data Lines
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col md={7} >
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#minimalize">
                                                <p>Technológia 10BASE-T1S zjednodušuje architektúru systému, čím zvyšuje
                                                    bezpečnosť a znižuje riziko.</p>
                                                <p>Zabezpečuje jednotný dizajn systému pre jednoduchšie testovanie a údržbu.</p></Tab.Pane>
                                            <Tab.Pane eventKey="#optimilize">
                                                <p>S Physical Layer Collision Avoidance je možné efektívne využívať dostupnú
                                                    šírku pásma.</p>
                                                <p>Každé zariadenie PHY môže posielať údaje len v prípade, že vlastní prenosovú
                                                    príležitosť, čo maximalizuje šírku pásma.</p></Tab.Pane>
                                            <Tab.Pane eventKey="#automotive">
                                                <p>Technológia 10BASE-T1S je vyvinutá pre štandard IEEE 802.3cg-2019 a
                                                    poskytuje možnosť výhradne eternetových sietí v vozidle.
                                                </p>
                                                <p>Umožňuje pripojenie až na okraj siete a zohľadňuje potreby architektúry zón.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#multidrop">
                                                <p>Implementácia zbernice s viacerými zastávkami redukuje náklady, keďže
                                                    všetky uzly sú pripojené cez rovnaký nekrytý skrútený pár káblov</p>
                                                <p>Nepotrebuje žiadne SWITCHE, funguje kompletne bez nich.</p></Tab.Pane>
                                            <Tab.Pane eventKey="#flexibility">
                                                <p>Štandard špecifikuje podporu pre minimálne osem uzlov, s možnosťou
                                                    ďalšieho škálovania</p>
                                                <p>Poskytuje flexibilitu v návrhu siete s dĺžkou zbernice až do 25 metrov.</p></Tab.Pane>
                                            <Tab.Pane eventKey="#power">
                                                <p>Technológia podporuje Power Over Data Lines , čím znižuje komplexnosť a
                                                    hmotnosť káblov a zvyšuje spoľahlivosť.
                                                </p>
                                                <p>POWER OVER DATA LINES - Tieto káble slúžia aj ako napájanie.</p></Tab.Pane>

                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>


                    </Row>
                </Container>
            </div>


            <div className='min-vh-100 bg-light d-flex align-items-center justify-content-center h-100 flex-grow-1' id='tlong'>
                <Container className='fs-5 mb-4 md-mt-0s' >
                    <h1 className='text-center'>10BASE-T1L</h1>

                    <Row className='d-flex align-items-center'>
                        <Col md={6}>
                            <p>
                                Tento štandard má podobné vlastnosti ako štandard T1S, s tým rozdielom , že má
                                dosah až do 1 kilometra a používa sa viac v industriálnom priemysle ako a nie
                                v automobilovom. Na rozdiel od TS1 používa kódovanie PAM3 a nie Manchester, taktiež nieje multidrop ale point to point, ako aj ostatné SPE.
                            </p>
                            <h3>Advance Physical Layer</h3>
                            <p>Vznikla ako odvodenina zo štandardu 10BASE-T1L</p>
                            <p>
                                Advance Physical Layer je špecifikácia fyzickej vrstvy pre komunikáciu v oblasti
                                procesnej automatizácie. Je navrhnutý tak, aby spĺňal špecifické požiadavky
                                priemyselných aplikácií, ako sú chemické závody, výroba, energetika atď. Cieľom APL je
                                umožniť spoľahlivú a efektívnu komunikáciu v náročných priemyselných prostrediach.
                            </p>
                            <p>
                                APL je navrhnutý pre prevádzku na extrémne dlhých kábloch, často s dĺžkou niekoľko
                                stoviek metrov. Taktiež poskytuje spoľahlivý prenos dát s nízkou latenciou a odolnosť voči
                                rušeniu. Výsledkom je, že APL je vhodný pre aplikácie, kde je potrebná spoľahlivá
                                komunikácia v procesnej automatizácii priemyselných zariadení.
                            </p>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Image className='image border-2 border-dark' src={aplImage} fluid onClick={() => handleImageClick(aplImage)}></Image>
                        </Col>
                    </Row>


                </Container>

                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Body>
                        <Image src={selectedImage} fluid />
                    </Modal.Body>
                </Modal>

            </div>
        </div>


    );
}

export default MainContent;
