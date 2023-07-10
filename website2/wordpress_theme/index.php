<?php get_header(); ?>
<!-- Main -->
&lt;?php if ( have_posts() ) : ?&gt;
&lt;?php while ( have_posts() ) : the_post(); ?&gt;
  &lt;div id=&quot;post-&lt;?php the_ID(); ?&gt;&quot; &lt;?php post_class(); ?&gt;&gt;
    &lt;div class=&quot;post-header&quot;&gt;
       &lt;div class=&quot;date&quot;&gt;&lt;?php the_time( 'M j y' ); ?&gt;&lt;/div&gt;
       &lt;h2&gt;&lt;a href=&quot;&lt;?php the_permalink(); ?&gt;&quot; rel=&quot;bookmark&quot; title=&quot;Permanent Link to &lt;?php the_title_attribute(); ?&gt;&quot;&gt;&lt;?php the_title(); ?&gt;&lt;/a&gt;&lt;/h2&gt;
       &lt;div class=&quot;author&quot;&gt;&lt;?php the_author(); ?&gt;&lt;/div&gt;
    &lt;/div&gt;&lt;!--end post header--&gt;
    &lt;div class=&quot;entry clear&quot;&gt;
       &lt;?php if ( function_exists( 'add_theme_support' ) ) the_post_thumbnail(); ?&gt;
       &lt;?php the_content(); ?&gt;
       &lt;?php edit_post_link(); ?&gt;
       &lt;?php wp_link_pages(); ?&gt; &lt;/div&gt;
    &lt;!--end entry--&gt;
    &lt;div class=&quot;post-footer&quot;&gt;
       &lt;div class=&quot;comments&quot;&gt;&lt;?php comments_popup_link( 'Leave a Comment', '1 Comment', '% Comments' ); ?&gt;&lt;/div&gt;
    &lt;/div&gt;&lt;!--end post footer--&gt;
    &lt;/div&gt;&lt;!--end post--&gt;
&lt;?php endwhile; /* rewind or continue if all posts have been fetched */ ?&gt;
    &lt;div class=&quot;navigation index&quot;&gt;
       &lt;div class=&quot;alignleft&quot;&gt;&lt;?php next_posts_link( 'Older Entries' ); ?&gt;&lt;/div&gt;
       &lt;div class=&quot;alignright&quot;&gt;&lt;?php previous_posts_link( 'Newer Entries' ); ?&gt;&lt;/div&gt;
    &lt;/div&gt;&lt;!--end navigation--&gt;
&lt;?php else : ?&gt;
&lt;?php endif; ?&gt;
        <header-img>
            <div class="main-heading">
                <div class="content">
                    <h1>One Page Website</h1>
                    <h1>Design Template</h1>
                    <p>Lorem ipsum dolor sit amet consectetur<br> adipisicing elit. Laborum delectus, dolorem provident<br>que iusto soluta sed quia quo, providentprovident.</p>
                    <button class="btn">READ MORE</button>
                </div>
            </div>
        </header-img>
        <section>
            <div class="column">
                <div class="col-1">
                    <i class="fa-solid fa-vr-cardboard"></i>
                    <div class="row-1">
                    <h1>LOREM IPSUM</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa pariatur rerum! culpa pariatur rerum! culpa pariatur rerum! Ratione dolore, harum est voluptas et maxime.</p>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-sharp fa-solid fa-headset"></i>
                        <div class="row-1">
                        <h1>LOREM IPSUM</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa pariatur rerum! culpa pariatur rerum! culpa pariatur rerum! Ratione dolore, harum est voluptas et maxime.</p>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-solid fa-rocket"></i>
                        <div class="row-1">
                        <h1>LOREM IPSUM</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa pariatur rerum! culpa pariatur rerum! culpa pariatur rerum! Ratione dolore, harum est voluptas et maxime.</p>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-solid fa-trophy"></i>
                        <div class="row-1">
                        <h1>LOREM IPSUM</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  culpa pariatur rerum! culpa pariatur rerum!  culpa pariatur rerum! Ratione dolore, harum est voluptas et maxime.</p>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-sharp fa-solid fa-shield-halved"></i>
                        <div class="row-1">
                        <h1>LOREM IPSUM</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa pariatur rerum! culpa pariatur rerum! culpa pariatur rerum! Ratione dolore, harum est voluptas et maxime.</p>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa-solid fa-dumpster"></i>
                        <div class="row-1">
                        <h1>LOREM IPSUM</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. culpa pariatur rerum! Ratione dolore, harum est voluptas et maxime.</p>
                    </div>
                </div>
        </section>
        <div class="sec-1">
            <div class="container-1">
                <div class="main">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</b></p>
                    <button class="btn-plan">VIEW PLANS</button>
                </div>
            </div>
        </div>
        <div class="sec-2">
            <div class="column-2">
                <div class="col-2">
                    <img src="images/pexels-joshua-woroniecki-12790371.jpg">
                    <h3>Library</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        consectetur adipisicing elit.
                    </p>
                </div>
                <div class="col-2">
                    <img src="images/pexels-josh-hild-14557817.jpg">
                    <h3>Library</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        consectetur adipisicing elit. 
                    </p>
                </div>
                <div class="col-2">
                    <img src="images/pexels-joyston-judah-933054.jpg">
                    <h3>Library</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
        <section-3>
            <div class="heading-3">
                <h1>MEET THE TEAM</h1>
            </div>
            <div class="container-3">
                <div class="column-2">
                    <div class="content-3">
                        <img src="images/pexels-joyston-judah-933054.jpg">
                        <h2>JONN DOE</h2>
                        <p>Graphix Designer</p>
                        <i class="fa-solid fa-dumpster"></i>
                        <i class="fa-solid fa-trophy"></i>
                        <i class="fa-solid fa-trophy"></i>
                    </div>
                    <div class="content-3">
                        <img src="images/pexels-josh-hild-14557817.jpg">
                        <h2>JONN DOE</h2>
                        <p>Graphix Designer</p>
                        <i class="fa-solid fa-dumpster"></i>
                        <i class="fa-solid fa-trophy"></i>
                        <i class="fa-solid fa-trophy"></i>
                    </div>
                    <div class="content-3">
                        <img src="images/pexels-nmq-936194.jpg">
                        <h2>JONN DOE</h2>
                        <p>Graphix Designer</p>
                        <i class="fa-solid fa-dumpster"></i>
                        <i class="fa-solid fa-trophy"></i>
                        <i class="fa-solid fa-trophy"></i>
                    </div>
                </div>
            </div>
        </section-3>
        <section-4>
            <div class="container-4">
                <div class="col-4">
                    <div class="content-4">
                        <h2>STARTER</h2>
                        <div class="rate-4">
                        <i class="fa-solid fa-dollar-sign" style="font-size: 24px; color: #fff; margin: 10px auto;"><span>2</span></i>
                        </div>
                        <i class="fa-solid fa-trophy">1 admin</i>
                        <i class="fa-solid fa-dumpster">3 Gb Disk Space</i>
                        <i class="fa-solid fa-trophy">Photos</i>
                        <i class="fa-sharp fa-solid fa-headset">Headset</i>
                        <i class="fa-solid fa-trophy">Free Upgrade</i>
                        <button class="btn-sign">SIGN UP!</button>
                    </div>
                    <div class="content-4">
                        <h2>STARTER</h2>
                        <div class="rate-4">
                            <i class="fa-solid fa-dollar-sign" style="font-size: 24px; color: #fff; margin: 10px auto;"><span>16</span></i>
                        </div>
                        <i class="fa-solid fa-trophy">1 admin</i>
                        <i class="fa-solid fa-dumpster">3 Gb Disk Space</i>
                        <i class="fa-solid fa-trophy">Photos</i>
                        <i class="fa-sharp fa-solid fa-headset">Headset</i>
                        <i class="fa-solid fa-trophy">Free Upgrade</i>
                        <button class="btn-sign" style="background-color: #eba800;">SIGN UP!</button>
                    </div>
                    <div class="content-4">
                        <h2>STARTER</h2>
                        <div class="rate-4">
                            <i class="fa-solid fa-dollar-sign" style="font-size: 24px; color: #fff; margin: 10px auto;"><span>59</span></i>
                        </div>
                        <i class="fa-solid fa-trophy">1 admin</i>
                        <i class="fa-solid fa-dumpster">3 Gb Disk Space</i>
                        <i class="fa-solid fa-trophy">Photos</i>
                        <i class="fa-sharp fa-solid fa-headset">Headset</i>
                        <i class="fa-solid fa-trophy">Free Upgrade</i>
                        <button class="btn-sign" >SIGN UP!</button>
                    </div>
                </div>
            </div>
        </section-4>

<?php get_footer(); ?>