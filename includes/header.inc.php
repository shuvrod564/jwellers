     
    <!-- navigation start --> 
    <nav class="navbar navbar-expand-lg smart-scroll" id="mainNav">
        <div class="container position-relative align-items-start">   
            <a href="<?php echo $base_url;?>" class="navbar-brand p-0 m-0 d-inline-block" aria-label="<?php echo $site_name;?>" title="<?php echo $site_name;?>">
                <img src="<?php echo $base_url;?>assets/images/logo-white.svg" width="180" height="136" class="w-auto" alt="<?php echo $site_name;?>">
            </a>
            <ul class="navbar-nav d-none d-lg-flex align-items-center">    
                <li class="nav-item dropdown "> 
                    <a href="#" class="nav-link">
                        Houseboats 
                    </a> 
                    <ul class="dropdown-menu border-0 bg-white" aria-labelledby="drop1"> 
                        <li><a href="<?php echo $base_url;?>deluxe-houseboats.php" class="dropdown-item fw-medium">Delux Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>premium-houseboats.php" class="dropdown-item fw-medium">Premium Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>semi-luxury-houseboats.php" class="dropdown-item fw-medium">Semi Luxury Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>luxury-houseboats.php" class="dropdown-item fw-medium">Luxury Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>super-luxury-houseboat.php" class="dropdown-item fw-medium">Super Luxury Houseboat</a></li> 
                    </ul> 
                </li>         
                <li class="nav-item dropdown ms-lg-3"> 
                    <a href="#" class="nav-link">
                        Packages 
                    </a> 
                    <ul class="dropdown-menu border-0 bg-white" aria-labelledby="drop1"> 
                        <li><a href="<?php echo $base_url;?>honeymoon-cruise.php" class="dropdown-item fw-medium">Honeymoon Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>overnight-cruise.php" class="dropdown-item fw-medium">Overnight Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>morning-cruise.php" class="dropdown-item fw-medium">Morning Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>night-cruise.php" class="dropdown-item fw-medium">Night Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>day-cruise.php" class="dropdown-item fw-medium">Day Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>wedding-cruise.php" class="dropdown-item fw-medium">Wedding Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>birthday-cruise.php" class="dropdown-item fw-medium">Birthday Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>family-cruise.php" class="dropdown-item fw-medium">Family Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>bachelor-friendly-cruise.php" class="dropdown-item fw-medium">Bachelor Friendly Cruise </a></li>
                    </ul> 
                </li>         
                <li class="nav-item dropdown ms-lg-3"> 
                    <a href="#" class="nav-link"> 
                        Experience 
                    </a> 
                    <ul class="dropdown-menu border-0 bg-white" aria-labelledby="drop1"> 
                        <li><a href="<?php echo $base_url;?>houseboat-alleppey.php" class="dropdown-item fw-medium">Houseboat in Alleppey</a></li>
                        <li><a href="<?php echo $base_url;?>kayaking-alleppey.php" class="dropdown-item fw-medium">Kayaking in Alleppey</a></li>
                        <li><a href="<?php echo $base_url;?>shikara-ride-alleppey.php" class="dropdown-item fw-medium">Shikara Ride in Alleppey</a></li>
                        <li><a href="<?php echo $base_url;?>canoeing-alleppey.php" class="dropdown-item fw-medium"> Canoeing in Alleppey</a></li> 
                    </ul> 
                </li>       
            </ul>  
            
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" class="navbar-toggler rounded p-2 d-block ms-1 ms-xl-3" type="button"><span></span><span></span><span></span></button>   
            <!-- <button onclick="openSideMenu()" class="navbar-toggler d-xl-none" type="button"><span></span><span></span><span></span></button>   -->
        </div>
    </nav> 
    <!-- navigation end --> 

   

    <div class="offcanvas offcanvas-end sideNav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <p class="offcanvas-title lead-sm fw-semibold text-primary mb-0" id="offcanvasExampleLabel">Kerala Cruises</p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body px-0">
        <ul class="links__list">
                <li><a href="<?php echo $base_url;?>">Home</a></li>
                <li><a href="<?php echo $base_url;?>about.php">About Us</a></li>
                <li> 
                    <a class="btn__link collapsed" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                        Houseboats
                    </a>
                    <ul class="collapse" id="collapse1"> 
                        <li><a href="<?php echo $base_url;?>deluxe-houseboats.php">Delux Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>premium-houseboats.php">Premium Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>semi-luxury-houseboats.php">Semi Luxury Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>luxury-houseboats.php">Luxury Houseboats</a></li>
                        <li><a href="<?php echo $base_url;?>super-luxury-houseboat.php">Super Luxury Houseboat</a></li> 
                    </ul>
                </li> 
                <li> 
                    <a class="btn__link collapsed" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                        Special Packages 
                    </a>
                    <ul class="collapse" id="collapse2"> 
                        <li><a href="<?php echo $base_url;?>honeymoon-cruise.php" class="dropdown-item fw-medium">Honeymoon Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>overnight-cruise.php" class="dropdown-item fw-medium">Overnight Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>morning-cruise.php" class="dropdown-item fw-medium">Morning Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>night-cruise.php" class="dropdown-item fw-medium">Night Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>day-cruise.php" class="dropdown-item fw-medium">Day Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>wedding-cruise.php" class="dropdown-item fw-medium">Wedding Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>birthday-cruise.php" class="dropdown-item fw-medium">Birthday Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>family-cruise.php" class="dropdown-item fw-medium">Family Cruise</a></li>
                        <li><a href="<?php echo $base_url;?>bachelor-friendly-cruise.php" class="dropdown-item fw-medium">Bachelor Friendly Cruise </a></li>
                    </ul>
                </li> 
                <li>
                    <a class="btn__link collapsed" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
                        Experience
                    </a>
                    <ul class="collapse" id="collapse3"> 
                        <li><a href="<?php echo $base_url;?>houseboat-alleppey.php">Houseboat in Alleppey</a></li>
                        <li><a href="<?php echo $base_url;?>kayaking-alleppey.php">Kayaking in Alleppey</a></li>
                        <li><a href="<?php echo $base_url;?>shikara-ride-alleppey.php">Shikara Ride in Alleppey</a></li>
                        <li><a href="<?php echo $base_url;?>canoeing-alleppey.php"> Canoeing in Alleppey</a></li> 
                    </ul>
                </li>   
                <li><a href="<?php echo $base_url;?>blog/">Blog</a></li>
                <li><a href="<?php echo $base_url;?>contact.php">Contact Us</a></li>
            </ul>
        </div>
    </div><!--.//off-canvas-->
   
 