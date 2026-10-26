# Security project sources

Content and assets reviewed on September 22, 2026. Teaching context was supplied
by Ibrahim; technical descriptions below are supported by the public repositories.
No challenge applications were executed as part of this portfolio update.

## HackZone Tunisia X

- [HZ-X-challenges](https://github.com/boubakriibrahim/HZ-X-challenges): web challenge directories include Flask/Python, PHP, Dockerfiles and Docker Compose configuration; `rev/FlagChecker` contains an Android APK exercise.
- The existing case study's event responsibilities and participation figures come from the previously supplied résumé content.
- [HackZone X announcement](https://www.tuniscope.com/article/329306/culture/evenements/rendez-vous-incontournable-de-la-cybersecurite-en-tunisie-074209): CSI ENSI event artwork, published April 12, 2022.
- [Original banner](https://tuniscope.com/uploads/images/content/Poster%20HackZone.png) → `public/assets/projects/hackzone-x.webp` and `hackzone-x-800.webp`.

## Web Security Challenges

- [Web_Challenges](https://github.com/boubakriibrahim/Web_Challenges): separate SQL injection, loose comparison, regular-expression and JWT exercises, with PHP/JavaScript sources and supporting assets.
- [Original training banner](https://github.com/boubakriibrahim/Web_Challenges/blob/master/banner.png) → `public/assets/projects/web-challenges.webp` and `web-challenges-800.webp`.
- No project year was inferred from repository creation or file timestamps.

## ENSI Cyber Range

- [ENSI-Cyber-Range-App](https://github.com/boubakriibrahim/ENSI-Cyber-Range-App): README describes an ENSI design and programming project for explaining and demonstrating network-security scenarios.
- `mainwindow.py`, `form.ui` and `requirements.txt` support the Python/PySide6/Qt Material interface, background QRunnable/QThreadPool tasks, Scapy, discovery and scenario controls.
- Separate modules implement network scanning, ARP spoofing, DHCP starvation and SYN flooding.
- [README interface image](https://i.postimg.cc/RFQ0dYQP/interface.png) → `public/assets/projects/ensi-cyber-range.webp` and `ensi-cyber-range-800.webp`.
- The screenshot credits Ibrahim Boubakri and Adem Hmissa, dated 2022. The portfolio describes this as a team project and links Ibrahim's public fork.

Images are resized and encoded as WebP without changing their content. Case
studies include visible source credits and a link to view the complete image.
The three 800px previews total approximately 93 KB; the larger files total 249 KB.

## Service Desk

- The case study details are based on the project README, product overview, architecture notes, security rules and demo walkthrough.
- Public source: [service-desk](https://github.com/boubakriibrahim/service-desk).
- `public/assets/projects/service-desk-film.mp4` and `service-desk-film-poster.webp` are the project's own launch film and its title-card poster, produced for the project and reused here. The film does not autoplay and loads only on demand.

## Industrial Perception & Robotics

- The case study's context, pipeline story and numbers come from Ibrahim's master's thesis (UQTR, with industrial partner Noovelia): the synthetic-data chapter, the methodology chapter and the results chapter. Numbers quoted: synthetic set sizes (5,000 to 25,000 images), 300 real images per site with a 70/15/15 split, 35 training runs per model, scores above 85% from 31 real images against below 55% for real-only training (store test set), the synthetic plateau around 20,000 images, 14 to 18.5 FPS on the robot, and the target-point results from the robot trials (lateral misalignment 3.2 to 1.95 cm, detection loss 4.8% to 1.2%).
- The thesis states that the PyBullet simulator and the web dashboard were built by the partner's team; the case study credits them to the partner and describes Ibrahim's work as the detector, its perception API and their integration.
- `public/assets/projects/perception-detections.webp` (and `-800`) combines the thesis's four detection frames from the robot camera at the partner's site. `perception-synthetic.webp` combines the four synthetic Blender examples with automatic annotations. `perception-pybullet.webp` is the thesis screenshot of the partner's PyBullet simulator, with empty desktop space at the bottom right filled with a flat colour. No content was otherwise changed.
- Illustrations in the thesis that are generated concept images, and charts labelled only in French, are not used.

## System diagrams

- `public/assets/projects/<slug>-diagram-en.png` and `<slug>-diagram-fr.png` for Service Desk, Real-Time Hydrogen Data Platform, Modular AI Platform and Industrial Perception & Robotics were generated with [Archify](https://github.com/tt-a1i/archify) 3.2.0, passed its validation and browser checks, and were exported with its PNG export, then resized to 1600px wide. Each has a `-dark.png` twin exported with Archify's dark theme.
- Diagrams simplify the case-study evidence. The Modular AI Platform diagram uses the private platform's architecture notes and service code; its identity and commercial features stay private. The Real-Time Hydrogen Data Platform diagram was rebuilt from its private source: MQTT/Socket.IO live messaging, Express/MongoDB records, a separate spreadsheet processor that writes a JSON report, and Python analysis tools. An automatic connection from that report file into the web application was not established. The inspected bridge does not persist every MQTT update. Deployment configuration is not treated as proof of a working deployment.
- `public/assets/projects/<slug>-loop-en.mp4` / `-fr.mp4`, their `.webp` posters and `-dark` twins, for Modular AI Platform and Real-Time Hydrogen Data Platform, use 1600×1000 frames. The rebuilt data-platform loop lasts 5.73 seconds and follows the distinct live, stored-record and spreadsheet paths. Moving dots illustrate relationships, not measured throughput. Each destination gets a brief outline. Frames were rendered in headless Chrome and encoded as H.264 with ffmpeg. The first and last source frames match exactly, with a short static hold. Playback repeats while visible, with a play/pause button; it pauses off-screen and in hidden tabs. Reduced motion and JavaScript-free browsing retain the static poster. Only the active theme loads and plays.
- The Real-Time Hydrogen Data Platform homepage card uses `public/assets/projects/realtime-data-platform-station.webp` (1600×1000, with an 800px variant), a still of the local station record and live pressure charts. All telemetry is synthetic and visibly labelled; the demo owner email is redacted. The motion loop remains in that project's case-study hero.

## Portfolio films

- New films for Industrial Perception & Robotics, Modular AI Platform, Real-Time Hydrogen Data Platform, HackZone Tunisia X, Web Security Challenges and ENSI Cyber Range were authored as separate projects in the motion_videos kit. Each uses H.264 with faststart, a local WebP poster and selectable English/French WebVTT captions. Narration is in English. Films load on demand; diagram loops remain on the Modular AI Platform homepage card and in the two existing case-study heroes.
- Perception uses the thesis detection frames, synthetic renders, partner simulator screenshot and simplified architecture. The partner receives simulator credit. Unconfirmed performance figures are omitted from the film.
- Modular AI Platform uses anonymized diagrams and abstract service relationships only. No product interface, camera footage, internal names or commercial features appear.
- The data-platform film includes a local run of the original React station record, MQTT source configuration and live pressure charts, connected through a local MQTT broker and Socket.IO bridge. All displayed telemetry is synthetic and visibly labelled as a local demonstration; broker values and the demo owner email are redacted. The local run needed compatibility adaptations; proprietary simulation archives were unavailable, so it is not evidence that the full original stack starts unchanged.
- The three security films use their public project artwork/interface, inspected repository structure and source excerpts. No attack scenarios were executed for these films, and no unconfirmed participation counts are shown.
- The original Service Desk film remains available. Its caption describes the workflow without asserting that every displayed value has been independently verified.
