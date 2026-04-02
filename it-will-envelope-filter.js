desc: IT WILL Envelope Filter

slider1:1<0,2,1{Low,Mid,High}>Mode
slider2:2<0.1,10,0.1>Gain
slider3:1.2<1,2.5,0.1>Sens
slider4:6<4,12,0.1>Q
slider5:0.5<0,1,0.01>Speed (Quack)
slider6:0.25<0,0.5,0.01>Volume
slider7:preset=0<0,5,1{It WILL Envelope Filter,EHX Q-Tron,MXR 105Q Bass,Boss AW-3,Prometheus DLX,Mojo Hand FX Wonder Filter,DOD 440,Source Audio Spectrum,AllPedal Macrodose,Solid Gold Supa Funk}>Preset

@init
env = 0;
low = 0;
band = 0;
last_preset = 0;

@slider

// Speed extremo
attack  = 0.0005 + (1 - slider5) * 0.02;
release = 0.02   + (1 - slider5) * 0.6;

attack_coeff  = exp(-1 / (attack * srate));
release_coeff = exp(-1 / (release * srate));

min_freq = 80;
max_freq = 5000;

q = max(slider4, 0.001);
res = 1 / q;

preset != last_preset ? (

  last_preset = preset;

  preset == 0 ? ( // It Will Envelope Filter
    slider1 = 1;
    slider2 = 2.0;
    slider3 = 1.2;
    slider4 = 6.0;
    slider5 = 0.5;
    slider6 = 0.25;
  );

  preset == 1 ? ( // EHX Q-Tron
    slider1 = 1;
    slider2 = 2.5;
    slider3 = 1.4;
    slider4 = 7.5;
    slider5 = 0.45;
    slider6 = 0.35;
  );
  
  preset == 2 ? ( // MXR 105Q Bass
    slider1 = 0;
    slider2 = 2.8;
    slider3 = 1.2;
    slider4 = 5.5;
    slider5 = 0.35;
    slider6 = 0.38;
  );
  
  preset == 3 ? ( // Boss AW-3
    slider1 = 1;
    slider2 = 2.0;
    slider3 = 1.6;
    slider4 = 8.5;
    slider5 = 0.75;
    slider6 = 0.32;
  );
  
  preset == 4 ? ( // Prometheus DLX
    slider1 = 1;
    slider2 = 3.0;
    slider3 = 1.8;
    slider4 = 9.5;
    slider5 = 0.55;
    slider6 = 0.34;
  );
  
  preset == 5 ? ( // Mojo Hand Wonder Filter
    slider1 = 0;
    slider2 = 2.2;
    slider3 = 1.5;
    slider4 = 6.5;
    slider5 = 0.40;
    slider6 = 0.36;
  );
  
  preset == 6 ? ( // DOD 440
    slider1 = 1;
    slider2 = 2.5;
    slider3 = 2.0;
    slider4 = 10.5;
    slider5 = 0.70;
    slider6 = 0.30;
  );
  
  preset == 7 ? ( // Source Audio Spectrum
    slider1 = 1;
    slider2 = 2.0;
    slider3 = 1.3;
    slider4 = 6.0;
    slider5 = 0.60;
    slider6 = 0.35;
  );
  
  preset == 8 ? ( // AllPedal Macrodose
    slider1 = 1;
    slider2 = 3.5;
    slider3 = 2.2;
    slider4 = 11.5;
    slider5 = 0.25;
    slider6 = 0.28;
  );
  
  preset == 9 ? ( // Solid Gold Supa Funk
    slider1 = 1;
    slider2 = 2.3;
    slider3 = 1.6;
    slider4 = 7.0;
    slider5 = 0.50;
    slider6 = 0.34;
  );

  sliderchange(1);
  sliderchange(2);
  sliderchange(3);
  sliderchange(4);
  sliderchange(5);
  sliderchange(6);

);

@sample

// Envelope (mono)
sum = 0;
i = 0;
loop(num_ch,
(
  sum += abs(spl(i));
  i += 1;
));
env_in = sum / num_ch;

// follower
env_in > env ?
(
  env = attack_coeff * (env - env_in) + env_in;
) :
(
  env = release_coeff * (env - env_in) + env_in;
);

// Sensitivity (Drive)
drive = slider3 / 6;
env_scaled = env * drive * 3;
env_scaled = min(env_scaled, 1);
env_scaled = pow(env_scaled, 0.6);

// Frequência
fc = min_freq * pow(max_freq / min_freq, env_scaled);
fc = min(max(fc, 20), srate * 0.45);

// SVF
f = 2 * sin($pi * fc / srate);

i = 0;
loop(num_ch,
(
  in = spl(i) * slider2;

  low += f * band;
  high = in - low - res * band;
  band += f * high;

  lp_out = low;
  bp_out = band * q * 0.7;
  hp_out = high * 1.2;

  out = slider1 == 0 ? lp_out :
        slider1 == 1 ? bp_out :
                       hp_out;

  out = out * slider6 * 1.5;
  out = out > 1 ? 1 : out < -1 ? -1 : out;

  spl(i) = out;

  i += 1;
));
