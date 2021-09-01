        const music = document.querySelector("audio");
        const img = document.querySelector("img");
        const play = document.getElementById("play");
        const artist = document.getElementById("artist");
        const title = document.getElementById("title");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        let progress = document.getElementById("progress");
        let total_duration = document.getElementById("duration");
        let current_time = document.getElementById("current_time");
        const progress_div = document.getElementById("progress_div");



        const songs = [
            {
                name: "song-1",
                title: "One Dance",
                artist: "Drake ft.Wizkid & Kyla",
            },
            {
                name: "song-2",
                title: "Lucid Dreams",
                artist: "Juice Wrld",
            },
            {
                name: "song-3",
                title: "Ransom",
                artist: "Lil Tecca",
            },

        ];





        let isPlaying = false;

        // for play function
        const playMusic = () => {
            isPlaying = true;
            music.play();
            play.classList.replace("fa-play", "fa-pause");
        };

        // for pause function
        const pauseMusic = () => {
            isPlaying = false;
            music.pause();
            play.classList.replace("fa-pause", "fa-play");
        };

        play.addEventListener("click", () => {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        });

        const loadSong = (songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src = "D:/HTML/MyWebsite/music/" + songs.name + ".mp3";
            img.src = "D:/HTML/MyWebsite/images/" + songs.name + ".jpg";
        };

        songIndex = 0;

        const nextSong = () => {
            songIndex = (songIndex + 1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        };

        const prevSong = () => {
            songIndex = (songIndex - 1 + songs.length) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        };

        //progress js work


        music.addEventListener("timeupdate", (event) => {
            // console.log(event);
            const { currentTime, duration } = event.srcElement;
            let progress_time = (currentTime / duration) * 100;
            progress.style.width = `${progress_time}%`;

            // music duration update

            console.log(duration);
            let min_duration = Math.floor(duration / 60);
            let sec_duration = Math.floor(duration % 60);

            let tot_duration = `${min_duration}:${sec_duration}`;
            if (duration) {
                total_duration.textContent = `${tot_duration}`;
            }

            // music currentTime update

            let min_currentTime = Math.floor(currentTime / 60);
            let sec_currentTime = Math.floor(currentTime % 60);
            if (sec_currentTime < 10) {
                sec_currentTime = `0${sec_currentTime}`;
            }
            let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
            current_time.textContent = `${tot_currentTime}`;
        });

        progress_div.addEventListener("click", (event) => {
            console.log(event);
            const { duration } = music;

            let move_progress =
                (event.offsetX / event.srcElement.clientWidth) * duration;
            //console.log(duration);
            //console.log(move_progress);

            music.currentTime = move_progress;
        });
