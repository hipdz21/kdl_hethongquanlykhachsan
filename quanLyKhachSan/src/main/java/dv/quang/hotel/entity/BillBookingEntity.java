/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dv.quang.hotel.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author dovan
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "tbl_billBooking")
public class BillBookingEntity implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int billBookingId;
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    private Date billDate;
    private float totalAmount;
    private float penaltyFee;
    private String billNote;
    
    @OneToOne
    @JoinColumn(name = "bookingId")
    private BookingEntiity booking;
}
