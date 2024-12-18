import { Component, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  phoneNumber: string = '+216 90058023';
  email: string = 'taher.chabaane@sesame.com';
  location: string = 'Sousse, Tunisia';
  socialLinks = {
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-handle'
  };

  currentColorIndex = 0;
  colorInterval: any;
  
  colorSchemes = [
    { primary: '#FF6B6B', secondary: '#4ECDC4', accent: '#45B7D1' },
    { primary: '#A06CD5', secondary: '#7189FF', accent: '#95E1D3' },
    { primary: '#FF9A8B', secondary: '#FF6F91', accent: '#FF8E72' },
    { primary: '#00B8A9', secondary: '#F8F3D4', accent: '#F6416C' },
    { primary: '#845EC2', secondary: '#D65DB1', accent: '#FF6F91' }
  ];

  isHovered = false;
  formSubmitted = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startColorCycle();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.colorInterval) {
      clearInterval(this.colorInterval);
    }
  }

  private startColorCycle() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.colorInterval = setInterval(() => {
      this.currentColorIndex = (this.currentColorIndex + 1) % this.colorSchemes.length;
      this.updateColors();
    }, 5000);
  }

  private updateColors() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const colors = this.colorSchemes[this.currentColorIndex];
    this.renderer.setStyle(document.documentElement, '--primary-color', colors.primary);
    this.renderer.setStyle(document.documentElement, '--secondary-color', colors.secondary);
    this.renderer.setStyle(document.documentElement, '--accent-color', colors.accent);
  }

  onFormSubmit() {
    this.formSubmitted = true;
    // Add your form submission logic here
  }

  onInputFocus(event: FocusEvent) {
    const element = event.target as HTMLElement;
    this.renderer.addClass(element, 'input-focused');
  }

  onInputBlur(event: FocusEvent) {
    const element = event.target as HTMLElement;
    this.renderer.removeClass(element, 'input-focused');
  }
}
